import { useEffect, useState } from "react"
import { Socket } from "socket.io";
import { io } from "socket.io-client";

export const useSocket = () => {
    const [socket, setSocket] = useState<Socket>();

    useEffect(() => {
        const socket = io(); 
        socket.on("connect", () => {
            alert("connected")
        })
    }, [])
}