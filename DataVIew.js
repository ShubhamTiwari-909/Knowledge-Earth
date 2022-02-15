import React from "react";
import NoData from './NoData'

function DataVIew(props) {
  return (
    <div>
      {props.searchList.length > 0 ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-8 mx-10 my-10">
          {props.searchList.map((item) => (
            <div
              key={item.pageid}
              className="my-10 bg-indigo-800 text-white text-center p-10 break-normal ring-2 ring-indigo-400 rounded-lg card"
              style={{ boxShadow: "5px 5px 15px black" }}
            >
              <p className="text-2xl text-slate-200 font-mono py-4 text-center border-b-2 border-red-300">
                {item.title}
              </p>
              <p
                className="text-blue-200 py-6"
                dangerouslySetInnerHTML={{ __html: item.snippet + "..." }}
              ></p>
              <p className="py-6 my-8 text-xs border-b-4 border-blue-400">
                Created at - {item.timestamp}
              </p>
              <div className="flex justify-center space-x-8">
                <a
                  className="px-4 py-2 rounded-md bg-slate-200 text-slate-800 ring-2 ring-blue-300 font-semibold"
                  rel="noreferrer"
                  target="_blank"
                  href={`https://en.wikipedia.org/wiki/${item.title}`}
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
}

export default DataVIew;
