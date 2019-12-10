import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const context = React.createContext();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

class Provider extends Component {
  state = {
    weightInput: "",
    repsInput: "",
    rpeInput: "",
    nameSignInput: "",
    emailSignInput: "",
    passSignInput: "",
    emailLogInput: "",
    passLogInput: "",
    exerciseInput: "",
    exercises: [],
    sets: [],
    startDate: new Date(),
    todaySelectedSets: [],
    todaySelectedEx: "",
    current: "1",
    currentText: 1,
    token: "",
    error: false,
    isLogged: undefined
  };

  getStuff = () => {
    this.setState(
      {
        token: sessionStorage.getItem("authtoken")
      },
      () => {
        const headers = {
          authtoken: this.state.token,
          user: sessionStorage.getItem("user")
        };

        axios.get(`/exercise`, { headers: headers }).then(res => {
          this.setState({
            exercises: res.data
          });
        });

        axios.get(`/set`, { headers: headers }).then(res => {
          this.setState({
            sets: res.data
          });
        });
      }
    );
  };

  handleChange = e => {
    if (e.target.name === "weight") {
      this.setState({
        weightInput: e.target.value
      });
    } else if (e.target.name === "reps") {
      this.setState({
        repsInput: e.target.value
      });
    } else if (e.target.name === "rpe") {
      this.setState({
        rpeInput: e.target.value
      });
    } else if (e.target.name === "exercise") {
      this.setState({
        exerciseInput: e.target.value
      });
    } else if (e.target.name === "nameSign") {
      this.setState({
        nameSignInput: e.target.value
      });
    } else if (e.target.name === "emailSign") {
      this.setState({
        emailSignInput: e.target.value
      });
    } else if (e.target.name === "passSign") {
      this.setState({
        passSignInput: e.target.value
      });
    } else if (e.target.name === "emailLog") {
      this.setState({
        emailLogInput: e.target.value
      });
    } else if (e.target.name === "passLog") {
      this.setState({
        passLogInput: e.target.value
      });
    }
  };
  // SET FUNCTIONS
  handleAddSet = name => {
    const newSet = {
      name: name,
      weight: this.state.weightInput,
      reps: this.state.repsInput,
      rpe: this.state.rpeInput,
      date: this.state.startDate.toLocaleDateString("en-US", options),
      user: sessionStorage.getItem("user")
    };

    this.setState({
      token: sessionStorage.getItem("authtoken")
    });

    const headers = {
      authtoken: this.state.token
    };

    axios.post("/set/add", newSet, { headers: headers }).then(res => {
      this.setState({
        sets: [...this.state.sets, res.data]
      });
    });
  };

  handleDeleteSet = id => {
    this.setState({
      token: sessionStorage.getItem("authtoken")
    });

    const headers = {
      authtoken: this.state.token
    };

    axios.delete(`/set/delete/${id}`, { headers: headers }).then(() => {
      this.setState({
        sets: this.state.sets.filter(item => item._id !== id)
      });
    });
  };

  handleEditSet = id => {
    const editedSet = {
      weight: this.state.weightInput,
      reps: this.state.repsInput,
      rpe: this.state.rpeInput,
      date: this.state.startDate.toLocaleDateString("en-US", options)
    };

    this.setState({
      token: sessionStorage.getItem("authtoken")
    });

    const headers = {
      authtoken: this.state.token
    };

    axios
      .post(`/set/update/${id}`, editedSet, { headers: headers })
      .then(res => {
        let setsArr = [...this.state.sets];
        let setIndex = setsArr.findIndex(item => item._id === id);
        setsArr[setIndex] = res.data;

        this.setState({
          sets: setsArr
        });
      });
  };
  //EXERCISE FUNCTIONS
  handleAddExercise = () => {
    const newExercise = {
      name: this.state.exerciseInput,
      date: this.state.startDate.toLocaleDateString("en-US", options),
      user: sessionStorage.getItem("user")
    };

    this.setState(
      {
        token: sessionStorage.getItem("authtoken")
      },
      () => {
        const headers = {
          authtoken: this.state.token
        };

        axios
          .post("/exercise/add", newExercise, { headers: headers })
          .then(res => {
            this.setState({
              exercises: [...this.state.exercises, res.data]
            });
          });
      }
    );
  };

  handleDeleteExercise = (id, name) => {
    this.setState({
      token: sessionStorage.getItem("authtoken")
    });

    const headers = {
      authtoken: this.state.token
    };

    axios.delete(`/exercise/delete/${id}`, { headers: headers }).then(() => {
      this.setState({
        exercises: this.state.exercises.filter(item => item._id !== id)
      });
    });
    axios.delete(`/set/deleteAll/${name}`).then(() => {
      this.setState({
        sets: this.state.sets.filter(item => item.name !== name)
      });
    });
  };

  handleDateChange = date => {
    this.setState({
      startDate: date
    });
  };

  handleExClick = (todaySets, todayEx) => {
    this.setState({
      todaySelectedSets: todaySets,
      todaySelectedEx: todayEx
    });
  };

  handlePageChange = name => {
    this.setState({
      current: name
    });
  };

  handleSign = () => {
    console.log("clicked");
    const newUser = {
      name: this.state.nameSignInput,
      email: this.state.emailSignInput,
      password: this.state.passSignInput
    };

    axios
      .post("/user/signup", newUser)
      .then(() => {
        console.log("sign function called");
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  handleLog = e => {
    e.preventDefault();
    const newLog = {
      email: this.state.emailLogInput,
      password: this.state.passLogInput
    };

    axios
      .post("/user/login", newLog)
      .then(res => {
        if (res.data === "wrong") {
          this.setState({
            error: true
          });
        } else {
          sessionStorage.setItem("authtoken", res.headers.authtoken);
          sessionStorage.setItem("user", this.state.emailLogInput);
          this.setState(
            {
              isLogged: true
            },
            () => {
              sessionStorage.setItem("isLogged", true);
              this.getStuff();
            }
          );
        }
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  handleLogOut = () => {
    sessionStorage.clear();
    this.setState({
      isLogged: false,
      currentText: 2
    });
  };

  handleClickText = num => {
    this.setState({
      currentText: num
    });
  };

  render() {
    return (
      <div>
        <context.Provider
          value={{
            ...this.state,
            handleChange: this.handleChange,
            handleAddSet: this.handleAddSet,
            handleAddExercise: this.handleAddExercise,
            handleDeleteExercise: this.handleDeleteExercise,
            handleDeleteSet: this.handleDeleteSet,
            handleDateChange: this.handleDateChange,
            handleEditSet: this.handleEditSet,
            handleExClick: this.handleExClick,
            handlePageChange: this.handlePageChange,
            handleSign: this.handleSign,
            handleLog: this.handleLog,
            handleLogOut: this.handleLogOut,
            handleClickText: this.handleClickText
          }}
        >
          {this.props.children}
        </context.Provider>
      </div>
    );
  }
}

const Consumer = context.Consumer;

export { Provider, Consumer };
