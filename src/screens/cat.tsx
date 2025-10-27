import React, { useState, useRef } from "react";
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
  Pressable,
} from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import RatingStars from "../components/fetchStars";
import DataList from "../data/datalist";
import { useRoute } from "@react-navigation/native";

// define item shape
type CategoryItem = {
  id: string | number;
  heading?: string;
  image?: any;
  price?: number;
  rating?: number;
  reviews?: number;
  [key: string]: any;
};

// 🔹 Reusable Search + Category component
type SearchAndCategoriesProps = {
  sticky?: boolean;
  searchValue: string;
  searchContent: (value: string) => void;
  restaurantData: CategoryItem[];
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
};

const SearchAndCategories = ({
  sticky = false,
  searchValue,
  searchContent,
  restaurantData,
  selectedCategory,
  setSelectedCategory,
}: SearchAndCategoriesProps) => {
  
  // 🔹 Create categories with "All" option
  const categories = [
    { id: "all", heading: "All" },
    ...restaurantData
  ];

  return (
    <View
      style={[sticky ? styles.stickySearchSection : styles.normalSearchSection]}
    >
      <View style={styles.inputtext}>
        <FontAwesome
          name="search"
          size={20}
          color={"grey"}
          style={{ marginLeft: -12 }}
        />
        <TextInput
          style={{ width: "80%", color: "black", paddingHorizontal: 18 }}
          placeholder="Search here"
          placeholderTextColor={"grey"}
          value={searchValue}
          onChangeText={searchContent}
        />
      </View>

      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
        }}
        ListEmptyComponent={() => (
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              fontWeight: "500",
              color: "grey",
            }}
          >
            No Item Found <FontAwesome5Icon name="times" size={16} color="grey" />
          </Text>
        )}
        renderItem={({ item }) => {
          const isActive = selectedCategory === (item.heading || "");
          return (
            <TouchableOpacity
              onPress={() => setSelectedCategory(item.heading || "")}
              style={[
                {
                  paddingHorizontal: 10,
                  borderBottomWidth: isActive ? 3 : 0,
                  borderColor: isActive ? "#0d0308ff" : "transparent",
                },
              ]}
            >
              <Text
                style={{
                  color: isActive ? "black" : "#858282ff",
                  fontWeight: isActive ? "700" : "500",
                }}
              >
                {item.heading}
              </Text>
            </TouchableOpacity>
          );
        }}
        style={{ marginTop: 12, height: 30 }}
      />
    </View>
  );
};

const Cat = () => {
  const [orderType, setOrderType] = useState("delivery");
  const [searchValue, setSearchValue] = useState("");
  const [restaurantData, setRestaurantData] = useState<CategoryItem[]>(
    DataList as CategoryItem[]
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isSticky, setIsSticky] = useState(false);
  const scrollY = useRef(new Animated.Value(0)).current;

  const route = useRoute();
  const { item } = (route.params || {}) as { item?: Partial<CategoryItem> };

  // 🔹 Filter data based on selected category
  const filteredData = restaurantData.filter(item => {
    if (selectedCategory === "All") return true;
    return item.heading === selectedCategory;
  });

  // 🔹 Updated category selection handler
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    
    if (category === "All") {
      setRestaurantData(DataList as CategoryItem[]);
    } else {
      const filtered = (DataList as CategoryItem[]).filter(
        item => item.heading === category
      );
      setRestaurantData(filtered);
    }
  };

  const searchContent = (value: string) => {
    setSearchValue(value);
    if (value === "") {
      setRestaurantData(DataList as CategoryItem[]);
    } else {
      const newRestaurantData = (DataList as CategoryItem[]).filter((it) =>
        (it.heading || "").toLowerCase().includes(value.toLowerCase())
      );
      setRestaurantData(newRestaurantData);
    }
  };

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    {
      listener: (event: any) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        const searchSectionTop = 400;
        setIsSticky(offsetY > searchSectionTop);
      },
      useNativeDriver: false,
    }
  );

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={"dark-content"}
      />

      {/* ✅ Single Sticky Section */}
      {isSticky && (
        <View style={styles.stickyContainer} pointerEvents="box-none">
          <SearchAndCategories
            sticky={isSticky}
            searchValue={searchValue}
            searchContent={searchContent}
            restaurantData={restaurantData}
            selectedCategory={selectedCategory}
            setSelectedCategory={handleCategorySelect}
          />
        </View>
      )}

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={() => (
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              fontWeight: "500",
              color: "grey",
            }}
          >
            No Item Found <FontAwesome5Icon name="times" size={16} color="grey" />
          </Text>
        )}
        ListHeaderComponent={
          <View>
            {/* 🔹 Header Image */}
            <View style={styles.headerImageContainer}>
              <Image
                source={item?.image || require("../assets/image5.jpg")}
                style={styles.headerImage}
              />

              <View style={styles.headerContent}>
                <Text style={styles.headerTitle}>
                  {" "}
                  {item?.heading || "Your Food"}
                </Text>
                <View style={styles.headerRating}>
                  <Text>
                    <RatingStars rating={item?.rating || 4.5} />
                  </Text>
                  <Text style={{ fontWeight: "600" }}>
                    {" "}
                    {item?.rating
                      ? `${item.rating} (${item.reviews}+) `
                      : "3.8 (300+ ratings)"}
                  </Text>
                </View>
              </View>
            </View>

            {/* 🔹 Delivery Info */}
            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderRadius: 8,
                marginHorizontal: 18,
                padding: 20,
                marginVertical: 8,
              }}
            >
              <Pressable style={styles.container1}>
                <TouchableOpacity
                  style={[styles.button, orderType === "delivery" && styles.activeButton]}
                  onPress={() => setOrderType("delivery")}
                >
                  <FontAwesome5Icon
                    name="truck"
                    size={16}
                    color={orderType === "delivery" ? "#000" : "grey"}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.button, orderType === "pickup" && styles.activeButton]}
                  onPress={() => setOrderType("pickup")}
                >
                  <FontAwesome5Icon
                    name="shopping-bag"
                    size={16}
                    color={orderType === "pickup" ? "#000" : "grey"}
                  />
                </TouchableOpacity>
              </Pressable>

              <View
                style={{
                  flexDirection: "column",
                  width: "80%",
                  paddingHorizontal: 8,
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "600" }}>
                  Delivery 20-45 min
                </Text>
                <Text style={{ color: "grey" }}>
                  Rs 129.00 delivery or Rs 109.00 with Savour ' Min order Rs 249.00
                </Text>
                <Text
                  style={{
                    position: "absolute",
                    right: 20,
                    top: 2,
                    color: "grey",
                    fontWeight: "bold",
                  }}
                >
                  change
                </Text>
              </View>
            </View>

            {/* 🔹 Pro Section */}
            <View style={styles.sub1}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={styles.sub2}>
                  <FontAwesome5Icon name="crown" size={14} color={"#fff"} />
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "700",
                      marginLeft: 4,
                    }}
                  >
                    Pro
                  </Text>
                </View>
                <Text style={{ fontSize: 16, fontWeight: "600" }}>
                  Subscribe foodPanda
                </Text>
              </View>
              <Text style={{ marginTop: 4 }}>
                We are here to give you the best services. You matter to us.
              </Text>
            </View>

            {/* 🔹 Search Section (Normal) */}
            {!isSticky && (
              <SearchAndCategories
                sticky={false}
                searchValue={searchValue}
                searchContent={searchContent}
                restaurantData={restaurantData}
                selectedCategory={selectedCategory}
                setSelectedCategory={handleCategorySelect}
              />
            )}

            <Text style={styles.header}>Popular</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.imageWrapper}>
              <Image source={item.image} style={styles.image} resizeMode="cover" />
              <TouchableOpacity style={styles.addButton} onPress={() => {}}>
                <FontAwesome5Icon name="plus" size={14} color="#070707ff" />
              </TouchableOpacity>
            </View>
            <Text style={styles.itemName}>{item.heading}</Text>
            <Text style={styles.itemPrice}>Rs {item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flexDirection: "row",
    backgroundColor: "#a6a2a219",
    borderRadius: 25,
    justifyContent: "space-between",
    width: 70,
    height: 35,
  },
  button: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 25,
    margin: 4,
  },
  activeButton: {
    backgroundColor: "#fff",
    borderColor: "black",
    borderWidth: 0.5,
  },
  sub1: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    backgroundColor: "rgba(234, 96, 249, 0.38)",
    marginHorizontal: 18,
    padding: 16,
  },
  sub2: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(237, 45, 131, 0.94)",
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 6,
  },
  inputtext: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 18,
    marginHorizontal: 18,
    backgroundColor: "white",
    borderRadius: 22,
    borderColor: "black",
    borderWidth: 1,
  },
  listContainer: {
    paddingBottom: 100,
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
    marginLeft: 10,
  },
  itemContainer: {
    flex: 1,
    paddingHorizontal: 4,
    margin: 8,
  },
  imageWrapper: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 12,
  },
  addButton: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: "#f9f8f8ff",
    borderRadius: 20,
    padding: 8,
  },
  itemName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  itemPrice: {
    fontSize: 14,
    color: "#666",
  },
  normalSearchSection: {},
  stickyContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    zIndex: 1000,
    elevation: 5,
    paddingTop: 23,
  },
  stickySearchSection: {
    backgroundColor: "white",
  },
  headerImageContainer: {},
  headerImage: {
    width: "100%",
  },
  headerContent: {},
  headerTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    paddingVertical: 8,
  },
  headerRating: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Cat;