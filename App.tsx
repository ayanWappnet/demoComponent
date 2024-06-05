/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from "react";
import type { PropsWithChildren } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import {
  Header,
  Dmslabel,
  HeaderRight,
  Jobheader,
  JobList,
  Dmstext,
  Radiobtn,
  Dmsbranch,
  DmsButton,
  DmsradioBtn,
  DmsKeyboardAvoidingView,
  DmsWebView,
  DmsDate,
} from "dms-components-rn";
type SectionProps = PropsWithChildren<{
  title: string;
}>;
let g = 0;
function App(): React.JSX.Element {
  const test = (aa: any) => {};
  const data = [
    { id: "1", label: "V5 Present" },
    { id: "2", label: "Handbook Present" },
    { id: "3", label: "Service Book Present 3" },
    { id: "4", label: "Looking Wheelnut ?" },
    { id: "5", label: "2 Keys ?" },
  ];

  const images = [
    { Image: "https://picsum.photos/200/300", Name: "Image 1" },
    { Image: "https://picsum.photos/200", Name: "Image 2" },
    { Image: "https://picsum.photos/200", Name: "Image 3" },

    // Add more objects as needed
  ];
  const isDarkMode = useColorScheme() === "dark";
  const [registrationNumber, setRegistrationNumber] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  let [reportProp, setReport] = useState<null>(null);
  const [mileageNumber, setMileageNumber] = useState("");
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [serverAddress, setServerAddress] = useState("");
  const [enableBranch, setEnableBranch] = useState(false);
  useEffect(() => {
    load();
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const load = async () => {
    // await setTechnicianStatus(await scheduledJobs_Logic.getTechStatus(user));
    let jobs = [
      {
        "Job No": "10558",
        "Customer Name": "Stock No 5646.1",
        "Date Out": "#22/09/23#",
        Reg: "W897RET",
        Make: "Volkswagen",
        Model: "GOLF",
        "Time Out": "05:00PM",
        jobID: "10558.1",
      },
      {
        "Job No": "10524",
        "Customer Name": "Mr Aidan36aaasasasaddsasa Willis3",
        "Date Out": "##",
        Reg: "SP65FEV",
        Make: "Mercedes-Benz",
        Model: "S350",
        "Time Out": "05:00PM",
        jobID: "10524.1",
      },
      {
        "Job No": "10271",
        "Customer Name": "Mr Perry Farrell",
        "Date Out": "#15/12/22#",
        Reg: "YT67EWF",
        Make: "VAUXHALL",
        Model: "CORSA",
        "Time Out": "05:00PM",
        jobID: "10271.1",
      },
    ];
    let reportPropa = {
      reportData: jobs,
      reportFunction: onPressFunc,
      reportKey: "Job No",
      load: () => {
        load();
      },
    };
    console.log("3wwwwwwwwww", JSON.stringify(reportPropa));
    // await setReport(reportPropa);
  };

  const handlePress = (option: any) => {
    setSelectedOption(option);
  };

  const onPressFunc = (line: any) => {
    // console.log(line);
    console.log("@@@@LINE", line);
  };

  const handleSearch = () => {
    console.log("PREESSS");
  };
  const handleDateChanged = (date: string) => {
    setSelectedDate(date);
  };

  return (
    <>
      {/* <DmsImageSlider images={images} /> */}
      {/* <DmsWebView
        Routine={"REACT.TEST"}
        Data={["1"]}
        HandleEvent={test}
      /> */}
      {/* <DmsDate
        initialDate={selectedDate ?? ""}
        OnDateChanged={handleDateChanged}
      /> */}
      <Dmslabel
        {...{
          Textstr: "Customer Id:",
          fontWeight: "bold",
          fontSize: 10,
        }}
      />
      <View style={styles.inputContainer}>
        <Dmstext
          secureTextEntry={false}
          onChangeText={setMileageNumber}
          placeholder="99999"
          value={mileageNumber}
          keyboardType="numeric"
        />
      </View>
      <Dmslabel
        {...{
          Textstr: "Choose an option:",
          fontWeight: "bold",
          fontSize: 10,
        }}
      />
      <View style={styles.container}>
        <Radiobtn
          onPress={() => handlePress("Option 1")}
          selected={selectedOption === "Option 1"}
        >
          Option 1
        </Radiobtn>
        <Radiobtn
          onPress={() => handlePress("Option 2")}
          selected={selectedOption === "Option 2"}
        >
          Option 2
        </Radiobtn>
        <Radiobtn
          onPress={() => handlePress("Option 3")}
          selected={selectedOption === "Option 3"}
        >
          Option 3
        </Radiobtn>
        <Text style={styles.selectedOption}>
          Selected Option: {selectedOption}
        </Text>
      </View>

      <View style={styles.searchButton}>
        <DmsButton
          props={{
            backgroundColor: "#007bff",
            name: "Search",
            onPress: () => {
              handleSearch();
            },
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginHorizontal: 100,
    borderRadius: 15,
    backgroundColor: "blue",
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
  registrationContainer: {
    marginTop: 100,
    justifyContent: "center",
    backgroundColor: "red",
  },
  inputContainer: {
    width: 250,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    alignSelf: "center",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#ffffff",
  },
  input1: {
    flex: 1,
    textAlign: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  selectedOption: {
    marginTop: 20,
    fontSize: 18,
  },
  searchButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    width: 300,
    height: 50,
  },
});

export default App;
