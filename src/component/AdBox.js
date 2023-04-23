import React from "react";

export function AdBox (props){
    let formatedUrl = formatUrl(props.data.imageUrl);
    console.log(props.data.added);
    return(
        <>
        <div className="bg-[#FFEBEB] hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition ease-in-out delay-150 hover:-translate-y-2">
            <div className="w-full">
                <img src={formatedUrl} className="w-full h-[300px] object-cover imageUrl" alt="" />
            </div>
            <div className="p-4 flex gap-2 flex-col justify-between">
                <div>
                    <p className="companyName text-sm font-bold text-[#9BA4B5]">{props.data.added[0].name}</p>
                    <h1 className="headline text-[24px] font-semibold">{props.data.headline}</h1>
                </div>
                <h2 className="primary-text text-[16px]">{props.data.primaryText}</h2>
                <p className="discription text-[20px]">{props.data.description}</p>
                <div className="text-center">
                <a className="CTA url b-0 px-4 py-2 bg-[#000] text-[#fff] rounded" href={props.data.added[0].url}>{props.data.CTA}</a>
                </div>
            </div>
        </div>
        </>
    )
}

function formatUrl(url){
    console.log(url);
    let breakUrl = url.split("/");
    breakUrl = breakUrl[breakUrl.length-2];
    if(breakUrl == "drive.google.com"){
        breakUrl = "17nXWIFT-63JLfEvBEuQiyDYmA2dckCmq"
    }
    console.log(breakUrl);
    return "http://drive.google.com/uc?export=view&id=" + breakUrl;
}