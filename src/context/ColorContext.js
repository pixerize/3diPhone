import {createContext, useState} from "react";
import {useGLTF} from "@react-three/drei";

export const ColorContext = createContext({});

export const ColorContextProvider = ({children}) => {
    const {materials} = useGLTF('/scene.gltf');

    const [currentColor, setCurrentColor] = useState({
        color:'#9BB5CE',
        text: 'Sierra Blue',
        rgbColor: '155, 181, 206',
    });

    let changeColorContext = (colorObject) => {
        console.log(currentColor)

        materials.Body.color.set(colorObject.color);
        setCurrentColor(colorObject);
        //
        // sectionRef.current.style.backgroundColor = `rgba(${rgbColor},0.4)`
    }

    return(
        <ColorContext.Provider value={{currentColor, changeColorContext}}>
            {children}
        </ColorContext.Provider>
    )
}