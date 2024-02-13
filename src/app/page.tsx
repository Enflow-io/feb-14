"use client";
import Image from "next/image";

import { Amatic_SC } from "next/font/google";
import { useState } from "react";

const amatic = Amatic_SC({
    subsets: ["cyrillic"],
    weight: ["400", "700"],
});

export default function Home() {
    const [newText, setNewText] = useState("");
    const sendMsg = async (text: string) => {
        if (text === "YES") {
            setNewText("Добро пожаловать на новый ОФЛАЙН уровень!");
        } else {
            setNewText("И тем не менее, тебе придется.");
        }
        let response = await fetch(
            "https://api.telegram.org/bot991060159:AAG61YeItmzzUtB_yuUExXaVCt4XvvzRPf0/sendMessage?chat_id=63410639&text=" +
                text
        );
        let data = await response.json();
        return data;
    };

    return (
        <>
            <main className="">
                <div className="content">
                    {newText && <div className={amatic.className}>{newText}</div>}

                    {!newText && (
                        <>
                            <div className={amatic.className}>
                                Ты уже здесь? <br />
                                Не сомневался, что ты разгадаешь загадки.
                                <br />
                                <br />
                                Но готова ли перейти на новый уровень?
                            </div>
                            <div className="buttons">
                                <button
                                    onClick={() => {
                                        sendMsg("YES");
                                    }}
                                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                                >
                                    ДА
                                </button>
                                <button
                                    onClick={() => {
                                        sendMsg("NO");
                                    }}
                                    style={{
                                        marginLeft: "2em",
                                    }}
                                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                                >
                                    НЕТ
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </main>
        </>
    );
}
