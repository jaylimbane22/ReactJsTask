import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"

import Sidebar from '../components/Sidebar'

const Home = () => {
  const [post, setPost] = useState({})
  const [openTab, setOpenTab] = useState(1);

  useEffect(() => {
    axios.get(` https://raw.githubusercontent.com/akshita151199/APIs/main/data`)
      .then((res) => {
        setPost(res.data)
      })
      .catch((err) => {
        alert(err)
      });
  }, []);

  return (
    <div className="flex">

      <Sidebar />
      <div className='vl'></div>
      <div className=" container p-7 ">
        <h2 className="text-2xl text-white font-semibold">Section</h2>
        <hr />
        <div className="card mt-2 flex justify-between text-white">
          <div className="ml-9">
            <p className="text-2xl font-semibold">Your Reward</p>
            <h3 className="text-4xl font-bold">$ 0.226231428</h3>
          </div>
          <div className="">
            <button className="bg-emerald-700 p-5 mr-3">Custom Link</button>
          </div>
        </div>

        <ul
          class="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
          role="tablist"
          data-te-nav-ref>
          <li role="presentation">
            <Link
              href="#tabs-home"
              onClick={() => setOpenTab(1)}
              className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
              data-te-toggle="pill"
              data-te-target="#tabs-home"
              data-te-nav-active
              role="tab"
              aria-controls="tabs-home"
              aria-selected="true"
            >Firs Tab</Link>
          </li>
          <li role="presentation">
            <Link
              href="#tabs-profile"
              onClick={() => setOpenTab(2)}
              className="focus:border-transparen my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
              data-te-toggle="pill"
              data-te-target="#tabs-profile"
              role="tab"
              aria-controls="tabs-profile"
              aria-selected="false"
            >Second Tab</Link>
          </li>

        </ul>


        <div class="mb-6">
          <div
            className={`hidden opacity-100 transition-opacity duration-150 ease-linear  text-white ${openTab === 1 ? "block" : "hidden"}`}
            id="tabs-home"
            role="tabpanel"
            aria-labelledby="tabs-home-tab"
            data-te-tab-active>
            {post.amount}
          </div>
          <div
            className={`hidden opacity-100 transition-opacity duration-150 ease-linear  text-white ${openTab === 2 ? "block" : "hidden"}`}
            id="tabs-profile"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab">
            Tab 2 content
          </div>


        </div>

      </div>
    </div>
  )
}

export default Home
