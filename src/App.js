import "./assets/App.css";
import Masonry from "react-responsive-masonry";
import { useEffect, useState } from "react";
import { FaPython, FaJava, FaCode } from "react-icons/fa";
import { PiChartLineUpBold } from "react-icons/pi";
import { TbColorFilter } from "react-icons/tb";
import { SiLeetcode } from "react-icons/si";

// Data
import pythonDocs from "./data/python_docs.json";
import javaDocs from "./data/java_docs.json";

// Components
import DS_BigO from "./Components/DS_BigO";
import LC_Patterns from "./Components/LC_Patterns";
import Blind75 from "./Components/Blind75";

function App() {
  const [activeDiv, setActiveDiv] = useState("docsDiv");
  const [documentation, setDocumentation] = useState(pythonDocs);
  const [selectedLanguage, setSelectedLanguage] = useState("Python");
  const [docsData, setDocsData] = useState(pythonDocs);
  const [searchTerm, setSearchTerm] = useState("");

  const handleButtonClick = (language) => {
    setSelectedLanguage(language);

    if (language === "Python") {
      setDocumentation(pythonDocs);
      setDocsData(pythonDocs);
    } else if (language === "Java") {
      setDocumentation(javaDocs);
      setDocsData(javaDocs);
    }
  };

  useEffect(() => {
    document.querySelector("html").classList.add("dark");
    document.querySelector("body").classList.add("dark:bg-zinc-900");
    document.querySelector("body").classList.add("bg-white");
  }, []);

  const expandView = (e) => {
    e.parentNode.querySelector(".content").classList.toggle("hidden");
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      document
        .querySelector(".copy-container")
        .classList.remove("copy-container-translate");
      let activeTime = 2000;
      setTimeout(() => {
        document
          .querySelector(".copy-container")
          .classList.add("copy-container-translate");
      }, activeTime);
    });
  };

  /*
        Filters Data based on query compared with multiple Fields i.e
        title, content.title, content.description, content.table
    */
  useEffect(() => {
    (async () => {
      const textSearch = (searchTerm, data) => {
        if (searchTerm.length < 2) {
          return documentation;
        }
        for (let i = data.length - 1; i >= 0; i--) {
          let item = data[i];
          if (!item.title.toLowerCase().includes(searchTerm)) {
            if (
              JSON.stringify(item.content).toLowerCase().includes(searchTerm)
            ) {
              for (let j = item.content.length - 1; j >= 0; j--) {
                let content = item.content[j];
                // console.log(searchTerm);
                if (
                  !content.title.toLowerCase().includes(searchTerm) &&
                  !content.description.toLowerCase().includes(searchTerm)
                ) {
                  let filteredTable = content.table.filter((x) => {
                    return x.join("").toLowerCase().includes(searchTerm);
                  });
                  if (filteredTable.length === 0) {
                    item.content.splice(j, 1);
                  } else {
                    item.content[j].table = filteredTable;
                  }
                }
              }
              if (item.content.length === 0) {
                data.splice(i, 1);
              } else {
                data[i] = item;
              }
            } else {
              data.splice(i, 1);
            }
          }
        }
        return data;
      };

      setDocsData(
        await textSearch(
          searchTerm.trim().toLowerCase(),
          JSON.parse(JSON.stringify(documentation))
        )
      );
    })();
  }, [searchTerm]);

  const searchClass = (query) => {
    setSearchTerm(query);
  };

  return (
    <div className="relative App">
      <div className="flex items-center px-5 py-4 border-b-2 header dark:border-b-zinc-800 border-b-zinc-200">
        <h1 className="flex items-center justify-center text-xl font-semibold text-center text-blue-500">
          <img src="./icon128.png" alt="LeetPrep" className="mr-3" width={30} height={30}/>
          LeetPrep
        </h1>
        <a
          rel="noreferrer"
          href="https://github.com/bleuscor/LeetPrep"
          target="_blank"
          className="inline-block ml-auto transition duration-200 text-zinc-600 hover:text-blue-500"
        >
          <svg
            fill="currentColor"
            className="w-6 h-6 ml-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" />
          </svg>
        </a>
        <div className="flex items-center px-3 py-1 ml-3 border-2 rounded-full border-zinc-700 focus-within:border-blue-500 text-zinc-600 focus-within:text-blue-500">
          <input
            autoFocus
            onChange={(e) => searchClass(e.currentTarget.value)}
            type="text"
            className="text-sm text-zinc-600 dark:text-white bg-transparent outline-none placeholder:text-zinc-600"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 ml-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <main className="p-6">
        {/* Navigation Bar */}
        <div className="flex justify-leading items-center pb-8 space-x-4">
          <button
            className={`flex items-center justify-center text-sm ${
              activeDiv === "docsDiv"
                ? "bg-blue-800 border-blue-500 border-2"
                : "bg-blue-600"
            } text-white px-4 py-2 rounded-lg shadow-md`}
            onClick={() => setActiveDiv("docsDiv")}
          >
            <FaCode className="mr-2" />
            Documentation
          </button>
          <button
            className={`flex items-center justify-center text-sm ${
              activeDiv === "bigODiv"
                ? "bg-blue-800 border-blue-500 border-2"
                : "bg-blue-600"
            } text-white px-4 py-2 rounded-lg shadow-md`}
            onClick={() => setActiveDiv("bigODiv")}
          >
            <PiChartLineUpBold className="mr-2" />
            Big-O Complexity
          </button>
          <button
            className={`flex items-center justify-center text-sm ${
              activeDiv === "lcDiv"
                ? "bg-blue-800 border-blue-500 border-2"
                : "bg-blue-600"
            } text-white px-4 py-2 rounded-lg shadow-md`}
            onClick={() => setActiveDiv("lcDiv")}
          >
            <TbColorFilter className="mr-2" />
            LC Patterns
          </button>
          <button
            className={`flex items-center justify-center text-sm ${
              activeDiv === "blindDiv"
                ? "bg-blue-800 border-blue-500 border-2"
                : "bg-blue-600"
            } text-white px-4 py-2 rounded-lg shadow-md`}
            onClick={() => setActiveDiv("blindDiv")}
          >
            <SiLeetcode className="mr-2" />
            Blind 75
          </button>
        </div>

        <div className="">
          {activeDiv === "docsDiv" && (
            <div className="">
              {/* Documentation Selection */}

              <div className="flex justify-left items-center pb-6 space-x-3">
                <button
                  className={`flex items-center justify-center text-sm ${
                    selectedLanguage === "Python"
                      ? "bg-slate-800 border-slate-700 border-2"
                      : "bg-slate-700"
                  } text-white px-4 py-1 rounded-lg shadow-md`}
                  onClick={() => handleButtonClick("Python")}
                >
                  <FaPython className="mr-2" />
                  Python
                </button>

                <button
                  className={`flex items-center justify-center text-sm ${
                    selectedLanguage === "Java"
                      ? "bg-slate-800 border-slate-700 border-2"
                      : "bg-slate-700"
                  } text-white px-4 py-1 rounded-lg shadow-md`}
                  onClick={() => handleButtonClick("Java")}
                >
                  <FaJava className="mr-2" />
                  Java
                </button>
              </div>
              <Masonry gutter="10px" columnsCount={2}>
                {docsData.length > 0 &&
                  docsData.map((item, index) => (
                    <div key={index} className="card">
                      <div className="px-4 py-3 border-b-2 rounded-t-2xl dark:border-b-zinc-800 border-b-zinc-200">
                        <h2 className="text-base font-semibold dark:text-white text-zinc-600">
                          {item.title}
                        </h2>
                      </div>
                      <ul className="py-3">
                        {item.content.map((content, index) => (
                          <li
                            className="mb-2"
                            key={index}
                            onClick={(e) => expandView(e.target)}
                          >
                            {/* Toggle */}
                            <div className="flex items-center justify-between px-4 py-2 text-sm font-medium transition duration-200 cursor-pointer dark:text-zinc-300 dark:hover:bg-zinc-800 dark:text-zinc-200 hover:bg-zinc-200">
                              {content.title}
                              <a
                                rel="noreferrer"
                                href={content.docs}
                                target="_blank"
                                className="text-xs tracking-wide transition duration-200 hover:text-blue-500 text-zinc-500"
                              >
                                DOCS
                              </a>
                            </div>

                            {/* Toggle Children */}
                            <div className="hidden content">
                              <div className="px-4 dark:bg-zinc-800 bg-zinc-100">
                                <p className="pt-3 pb-2 text-sm font-medium border-b-2 dark:text-zinc-300 text-zinc-400 dark:border-b-zinc-700 border-b-zinc-200">
                                  {content.description}
                                </p>
                              </div>
                              <ul className="px-4 py-0 mb-3 dark:bg-zinc-800 bg-zinc-50">
                                {content.table.map((classes, index) => (
                                  <li
                                    key={index}
                                    className="flex items-center justify-between py-3 border-b-2 last:border-0 dark:border-b-zinc-700 border-b-zinc-200"
                                  >
                                    <span
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        copyToClipboard(classes[0]);
                                      }}
                                      className="flex text-[13px] font-mono text-purple-500 hover:text-purple-600 cursor-pointer transition duration-200 mr-5"
                                    >
                                      {classes[0]}
                                    </span>

                                    <div className="flex flex-col gap-4">
                                      <span className="text-right">
                                        <span
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            copyToClipboard(classes[1]);
                                          }}
                                          className="text-[13px] text-blue-400 font-mono hover:text-sky-600 cursor-pointer transition duration-200"
                                        >
                                          {classes[1]}
                                        </span>
                                      </span>
                                      {classes[2] && (
                                        <span className="text-right text-xs transition duration-200 cursor-pointer dark:text-zinc-300 text-zinc-500 hover:text-sky-600">
                                          {" "}
                                          ({classes[2]})
                                        </span>
                                      )}
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </Masonry>
            </div>
          )}

          {activeDiv === "bigODiv" && (
            <div className="">
              <DS_BigO />
            </div>
          )}
          {activeDiv === "lcDiv" && (
            <div className="">
              <LC_Patterns />
            </div>
          )}
          {activeDiv === "blindDiv" && (
            <div className="">
              <Blind75 />
            </div>
          )}
        </div>

        {docsData.length <= 0 && (
          <div className="text-center">
            <p className="text-zinc-300 mb-2">Not Found</p>
            <p className="text-zinc-500 text-sm">
              Please try again with different keywords.
            </p>
          </div>
        )}
      </main>

      <div className="fixed transition duration-300 shadow-lg copy-container copy-container-translate right-4 bottom-4">
        <div className="px-3 py-2 text-sm text-white rounded-lg copy bg-zinc-800">
          Copied!
        </div>
      </div>
    </div>
  );
}

export default App;
