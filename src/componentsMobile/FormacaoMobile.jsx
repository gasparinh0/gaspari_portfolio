import React from 'react';

//IMPORTS DO MOTION
import { motion } from "framer-motion"

function FormacaoMobile() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >

            <h1 className='text-white text-3xl mt-3 mb-1 font-semibold'>Formação</h1>
            <div className='content-none w-28 h-1 bg-[#9026b0] rounded-full mb-2'></div>
            <p className='text-white font-light mb-3'>Minhas principais formações ao longo de minha vida profissional, ordenado por data de início.</p>
            <div className='flex items-center'>

                <div className='content-none h-28 w-2 bg-[#9026b0]'></div>
                <div className='content-none h-1 w-2 bg-[#9026b0]'></div>
                <div className='content-none h-5 w-6 bg-[#9026b0] rounded-full'></div>

                <div className='ml-2'>
                    <h1 className='text-white text-xl font-medium'>ETEC João Belarmino</h1>
                    <p className='text-white italic'>02/2020 - 12/2022</p>
                    <p className='italic text-[#c1cccc]'>Desenvolvimento de sistemas integrado ao ensino médio</p>
                </div>
            </div>

            <div className='flex items-center'>

                <div className='content-none h-28 w-1.5 bg-[#9026b0]'></div>
                <div className='content-none h-1 w-1.5 bg-[#9026b0]'></div>
                <div className='content-none h-5 w-5 bg-[#9026b0] rounded-full'></div>

                <div className='ml-2'>
                    <h1 className='text-white text-xl font-medium'>Instituição Centro Paulo Souza</h1>
                    <p className='text-white italic'>02/2020 - 04/2020</p>
                    <div className='flex gap-1'>
                        <p className='italic text-[#c1cccc]'>Design e Photoshop</p>
                    </div>
                </div>
            </div>

            <div className='flex items-center'>

                <div className='content-none h-28 w-1.5 bg-[#9026b0]'></div>
                <div className='content-none h-1 w-1.5 bg-[#9026b0]'></div>
                <div className='content-none h-5 w-5 bg-[#9026b0] rounded-full'></div>

                <div className='ml-2'>
                    <h1 className='text-white text-xl font-medium'>Universidade São Francisco</h1>
                    <p className='text-white italic'>02/2024 - 12/2027</p>
                    <div className='flex gap-1'>
                        <p className='italic text-[#c1cccc]'>Engenharia de Software</p>
                    </div>
                </div>
            </div>

            <div className='flex items-center'>

                <div className='content-none h-28 w-1.5 bg-[#9026b0]'></div>
                <div className='content-none h-1 w-1.5 bg-[#9026b0]'></div>
                <div className='content-none h-5 w-5 bg-[#9026b0] rounded-full'></div>

                <div className='ml-2'>
                    <h1 className='text-white text-xl font-medium'>Thiago Medeiros</h1>
                    <p className='text-white italic'>02/2023 - Cursando</p>
                    <div className='flex gap-1'>
                        <p className='italic text-[#c1cccc]'>Formação FullStack JavaSript</p>
                    </div>
                </div>
            </div>

            <div className='flex items-center'>

                <div className='content-none h-28 w-1.5 bg-[#9026b0]'></div>
                <div className='content-none h-1 w-1.5 bg-[#9026b0]'></div>
                <div className='content-none h-5 w-5 bg-[#9026b0] rounded-full'></div>

                <div className='ml-2'>
                    <h1 className='text-white text-xl font-medium'>Alura</h1>
                    <p className='text-white italic'>04/2023 - 05/2023</p>
                    <div className='flex gap-1'>
                        <p className='italic text-[#c1cccc]'>Formação Wordpress</p>
                    </div>
                </div>
            </div>

            <div className='flex items-center'>

                <div className='content-none h-28 w-1.5 bg-[#9026b0]'></div>
                <div className='content-none h-1 w-1.5 bg-[#9026b0]'></div>
                <div className='content-none h-5 w-5 bg-[#9026b0] rounded-full'></div>

                <div className='ml-2'>
                    <h1 className='text-white text-xl font-medium'>Hashtag Programação</h1>
                    <p className='text-white italic'>07/2023 - 07/2023</p>
                    <div className='flex gap-1'>
                        <p className='italic text-[#c1cccc]'>Jornada Python</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default FormacaoMobile;