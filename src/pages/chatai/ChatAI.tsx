import React from "react";
import axios from "axios";
import { useState } from "react";
import { SignOutButton } from "../../components/SignOutButton";
import { Button } from "react-bootstrap";
import "./ChatAI.css"

const ChatAI = () => {

    const [adminReply, setAdminReply] = useState(false);
    const [basicReply, setBasicReply] = useState(false);
    const [input, setInput] = useState('');
    const [chatAiOutput, SetChatAiOutput] = useState('Output from Chat AI')
    //const [chatAiOutput, SetChatAiOutput] = useState('asdfasdfasdfasdfdfadfasdfa sdfasdfaswdfasd asdfasdfasdfasdf asdfasdfa sd\n  /n fasdf')
    const adminTest = () => {
        axios
        .get("https://localhost:44377/api/Chat/admintest/")
        .then((response) => {
            if (response.status === 200) {
                alert('admin worked')
                //setAdminReply(true)
            }
        })
        .catch((error) => {
           // setAdminReply(false)
            if (error.response.status === 401 || error.response.status === 400) {
                console.log("error >>>", error.response.data)
                alert(`error >>>  ${error.response.data}`)
                //setError(error.response.data)
            } else{
                alert(`error >>> ${error.response.status}`)
            }
        })

        
    }

    const basicTest = () => {
        axios
        .get("https://localhost:44377/api/Chat/basictest/")
        .then((response) => {
            if (response.status === 200) {
                alert('basic worked')
                //setAdminReply(true)
            }
        })
        .catch((error) => {
            //setAdminReply(false)
            if (error.response.status === 401 || error.response.status === 400) {
                console.log("error >>>", error.response)
                //setError(error.response.data)
            } else{
                alert(`error >>> ${error.response.status}`)
            }
        })

        
    }

    const test = () => {
        axios
        .get("https://localhost:44377/api/Chat/test/")
        .then((response) => {
            if (response.status === 200) {
                alert('test worked')
                //setAdminReply(true)
            }
        })
        .catch((error) => {
            //setAdminReply(false)
            if (error.response.status === 401 || error.response.status === 400) {
                console.log("error >>>", error.response)
                //setError(error.response.data)
            } else{
                alert(`error >>> ${error.response.status}`)
            }
        })

        
    }
    const handleRequest = () => {
        
        let request = input
        console.log('input')
        console.log(request)
        let url = "https://localhost:44377/api/Chat/chatinterface/"
        let searchText = request
 
        //let formData = new FormData();
 
        // Adding files to the formdata
        //formData.append("image", newfiles);
        //formData.append("name", "Name");
        axios.post(
            url,
            {},
            {
              params: {
                searchText
              }
            }
          )
          .then(response => {
            if (response.status === 200) {
               // console.log("response")
               // console.log(response.data)
                SetChatAiOutput(response.data.toString());
               // document.getElementById("myTextarea").value = "Fifth Avenue, New York City";
                //alert('test worked')
                //setAdminReply(true)
            }
          })
          .catch(error => {
            alert(`error >>> ${error.response.status}`)
          });

    }
    const userInput = (event : any) => {
        setInput(event.target.value);
        console.log(input);
    };

    const handleOutput = (event : any) => {
        SetChatAiOutput(event.target.value);
    };

    return (
        <div>
            <h1 className="chatHeader">
                MAG's Interface to ChatGPT
            </h1>
            
            <div>
            <label className="outputLabel">Output Value : </label>
            </div>
            <div>
                <textarea 
                id="myTextarea"
                readOnly={true}
                className="outputArea rounded-3"
                //value={chatAiOutput}
                value={chatAiOutput}
                //onChange={this.handleChange}
                //cols={5}
                />
            </div>
            <div>
            <label className="outputLabel">Input Request : </label>
            </div>
            <div>
                <input className="inputbox rounded-3" name="userRequest" onChange={userInput} placeholder="Input request here" />
            </div>
            <div>
                <Button className="custom" onClick={handleRequest}>Submit</Button>
            </div>
            <div>
                <Button className="custom" onClick={adminTest}>Test Admin</Button>
            </div>
            <div>
                <Button className="custom" onClick={basicTest}>Test basic</Button>
            </div>
            <div>
                <Button className="custom" onClick={test}>Test test</Button>
            </div>
            <div className="custom">
                <SignOutButton />
            </div>
        </div>
    );
}

export default ChatAI;