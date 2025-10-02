"use client";
import EmpTable from "@/component/EmpTable";
import { Avatar, Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import { red } from "@mui/material/colors";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Emp(){
    const api_url = "/api/emp/all"
    const [list, setList] = useState([]);

    function getData(){
        axios.get(api_url).then(function(response){
            // 서버쪽에서 보내오는 JSON값을 list에 저장!
            console.log(response); //data안에 배열로 데이터가 들어가는것을 확인
            setList(response.data);
        });
    }

    useEffect(function(){
        getData();
    },[]); // ,[]: 한번만 수행한다
    return(
        <div style={{width:"980px", margin:"10px auto"}}>
        <Card sx={{ maxWidth: 900 }}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                </Avatar>
                }
                
                title="SIST 사원목록"
                subheader="October 02, 2025"
            />

            <CardContent>
                <EmpTable ar={list}/>
            </CardContent>
            
            </Card>
        </div>
    );
};