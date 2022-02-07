import "aframe";
import "./App.css";
import { Assets, Camera, Scene } from "@belivvr/aframe-react";
import SkyBox from "./components/SkyBox";
import AframeProvider from "./lib/aframe/AframeProvider";

function App() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <AframeProvider>
                <Scene>
                    {/* <Assets>
                        <Image id="clouds" src="clouds.png" />
                    </Assets> */}
                    <Camera />
                    <SkyBox />
                </Scene>
            </AframeProvider>
        </div>
    );
}

export default App;
