import React, { FC } from "react"
import Head from "next/head"

import { Box } from "@mui/material"
import { Navbar } from "../ui";
import Slidebar from "../ui/Slidebar";

interface Props {
    title?: string,
    children?: React.ReactNode;
}

export const Layout: FC<Props> = ({ title = 'OpenJira', children }) => {
    return (
        <Box sx={{ flexFlow: 1 }}>
            <Head>
                <title>{title}</title>
            </Head>

            <Navbar />
            <Slidebar />

            <Box sx={{ padding: '10px 20px'}}>
                {children}
            </Box>
        </Box>
    )
}