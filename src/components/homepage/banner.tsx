import React from 'react';
// import Image from "next/image";

import Image from "next/image";
import WorkoutLibrary from "./WorkoutLibrary";

// import BannerImg from "@/assets/Banner.png"

// const Banner = () => {
//     return (
//         < section className="py-12">
//             <div className=" container mx-auto grid grid-cols-2 gap-4 items-center  bg-slate-300 rounded-4xl p-4 ">
//                 <div>
//                     <h2 className="font-bold text-3xl">TRAIN WITH INTENT.LOG <br></br>EVERY SET</h2>
//                     <WorkoutLibrary />

//                     <h5 className="font-normal text-1xl">fitlog is drak.no-nonsence gym companion:pick a lift,lock it
//                         into today's plan and watch the week's work add up
//                     </h5>

//                     <button className="btn btn-success">browse</button>
//                 </div>
//                 <div>
//                     <Image src={BannerImg} alt="Banner" />
//                 </div>
//             </div>
//         </section>

//     );
// };

// export default Banner;



export default function Banner() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-10">
            <div className="flex min-h-[400px] items-center justify-between overflow-hidden rounded-2xl bg-[#cbd7e5] px-10">

                <div>
                    <h1 className="text-5xl font-black">
                        TRAIN WITH INTENT.LOG
                        <br />
                        EVERY SET
                    </h1>

                    <p className="mt-4">
                        fitlog is drak.no-nonsense gym companion:
                        pick a lift, lock it into today's plan and
                        watch the week's work add up
                    </p>

                    <button className="mt-5 rounded-md bg-emerald-400 px-6 py-3">
                        browse
                    </button>
                </div>

                {/* শুধু Banner image */}
                <Image
                    src="/Banner.png"
                    alt="Workout banner"
                    width={600}
                    height={400}
                    className="object-contain"
                // className="h-[360px] w-auto object-contain"
                />

            </div>
        </section>
    );
}