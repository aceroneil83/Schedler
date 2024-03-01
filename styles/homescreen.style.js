import { StyleSheet } from "react-native";
import { COLORS } from "../constants";

const homescreen = StyleSheet.create({
  homeContainer: {
    marginTop: 50,
    backgroundColor: "white",
  },

  userProfile: {
    width: 50,
    height: 50,
  },
  postContainer: {
    marginVertical: 10,
  },
  innerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.junkFree,
  },
  postHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },

  postButtonText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 18,
    padding: 15,
  },
  userName: {
    fontWeight: "bold",
    color: COLORS.postName,
    fontFamily: "Poppins_400Regular",
  },
  timePost: {
    color: COLORS.junkFree,
    fontWeight: "bold",
  },
  postContainer: {
    marginVertical: 10,
    paddingTop: 15,
    backgroundColor: COLORS.postContainer,
    borderRadius: 20,
  },
  postedImage: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 10,
  },
  postTitle: {
    fontWeight: "bold",
    fontSize: 14,
  },
  reactionContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    paddingTop: 10,
    justifyContent: "flex-end",
    paddingRight: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingBottom: 10,
    backgroundColor: COLORS.opacityGreen,
    marginTop: 10,
  },
  reactionText: {
    fontFamily: "Poppins_400Regular",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "lightgray",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  logoImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  searchContainer: {
    width: 200,
    height: 40,
    backgroundColor: "lightgray",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    flex: 2,
    marginRight: 10,
  },
  searchIcon: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    borderWidth: 0,
    padding: 8,
    borderRadius: 5,
  },
  logoImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  searchContainer: {
    width: 200,
    height: 40,
    backgroundColor: "lightgray",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    flex: 2,
    marginRight: 10,
  },
  searchIcon: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    borderWidth: 0,
    padding: 8,
    borderRadius: 5,
  },
  menuContainer: {
    marginRight: 20,
  },
  menuImage: {
    width: 40,
    height: 30,
    resizeMode: "contain",
  },

  popularContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
  },

  textPopularCategory: {
    fontSize: 17,
    fontWeight: "bold",
  },

  categoriesContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    marginVertical: 15,
  },

  categoryIcon: {
    width: 20,
    height: 20,
    tintColor: "#757575",
    marginRight: 5,
    padding: 10,
  },

  itemName: {
    fontSize: 16,
    marginLeft: 1,
  },

  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  imageitemContainer: {
    padding: 7,
    borderRadius: 10,
    backgroundColor: "#EEEEEE",
    flexDirection: "row",
    alignItems: "center",
  },

  addcategoriesContainer: {
    marginBottom: 20,
    marginHorizontal: 10,
  },

  addcategoryIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    padding: 10,
  },

  additemName: {
    fontSize: 16,
  },

  addimageitemContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "#EEEEEE",
    flexDirection: "row",
    alignItems: "center",
  },

  menuImage: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  heartReaction: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  reactionIconSize: { width: 30, height: 30 },
  shareButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});

export default homescreen;
