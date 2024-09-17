import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { API_KEY } from "@env";
import axios from "axios";
import Fontisto from "@expo/vector-icons/Fontisto";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const icons: any = {
  Clouds: "cloudy",
  Clear: "day-sunny",
  Rain: "rains",
  Snow: "snow",
  Drizzle: "rain",
  Thunderstorm: "lightning",
  Atmosphere: "cloudy-gusts",
};

export default function App() {
  const [city, setCity] = useState("Loading..");
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);

  useEffect(() => {
    (async function getWeather() {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        return setOk(false);
      }

      // city
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({ accuracy: 5 });
      const location = await Location.reverseGeocodeAsync(
        { latitude, longitude },
        { useGoogleMaps: false }
      );
      setCity(location[0].region ?? "");

      // fetch
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`
      );
      setDays(data.list);
    })();
  }, []);

  const timeFormatter = (dateString: string) => {
    const date = new Date(dateString);
    date.setHours(date.getHours() + 9);
    return date.toISOString().replace("T", " / ").slice(2, 15) + " h";
  };

  return (
    <>
      <StatusBar style="light" />

      <View style={styles.container}>
        <View style={styles.city}>
          <Text style={styles.cityName}>{city}</Text>
        </View>

        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.weather}
        >
          {days.length === 0 ? (
            <View style={{ ...styles.day, alignItems: "center" }}>
              <ActivityIndicator
                color="white"
                size="large"
                style={styles.loading}
              />
            </View>
          ) : (
            days.map((day: any, idx) => (
              <View key={idx} style={styles.day}>
                <Text style={styles.time}>{timeFormatter(day.dt_txt)}</Text>
                <View style={styles.tempContainer}>
                  <Text style={styles.temp}>
                    {parseFloat(day.main.temp).toFixed(1)}
                  </Text>
                  <Fontisto
                    name={icons[day.weather[0].main]}
                    size={68}
                    color="white"
                  />
                </View>

                <Text style={styles.main}>{day.weather[0].main}</Text>
                <Text style={styles.description}>
                  {day.weather[0].description}
                </Text>
              </View>
            ))
          )}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "royalblue",
  },
  city: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    color: "white",
    fontSize: 58,
    fontWeight: "500",
  },
  weather: {
    flexGrow: 1,
    backgroundColor: "red",
  },
  loading: {
    marginTop: 10,
  },
  day: {
    width: SCREEN_WIDTH,
    paddingHorizontal: 20,
  },
  time: {
    color: "white",
    fontSize: 18,
    marginBottom: -20,
  },
  tempContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  temp: {
    color: "white",
    fontWeight: "600",
    fontSize: 88,
  },
  main: {
    color: "white",
    fontSize: 24,
  },
  description: {
    color: "white",
    fontSize: 18,
  },
});
