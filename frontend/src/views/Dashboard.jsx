import React from "react";

export default function Dashboard() {
    return (
        <div class="p-2 rounded-lg dark:border-gray-700">
            <div class="grid grid-cols-4 gap-1 mb-4">
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <i class="fa fa-user fa-2x text-gray-500 dark:text-gray-400"></i>
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Customers
                        </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                        10
                    </p>
                    <a
                        href="#"
                        class="inline-flex items-center text-blue-600 hover:underline"
                    >
                        See more
                        <svg
                            class="w-3 h-3 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                            />
                        </svg>
                    </a>
                </div>

                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <i class="fa fa-id-card fa-2x text-gray-500 dark:text-gray-400"></i>
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Loan Types
                        </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                        4
                    </p>
                    <a
                        href="#"
                        class="inline-flex items-center text-blue-600 hover:underline"
                    >
                        See more
                        <svg
                            class="w-3 h-3 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                            />
                        </svg>
                    </a>
                </div>

                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <i class="fa fa-users fa-2x text-gray-500 dark:text-gray-400"></i>
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Groups
                        </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                        5
                    </p>
                    <a
                        href="#"
                        class="inline-flex items-center text-blue-600 hover:underline"
                    >
                        See more
                        <svg
                            class="w-3 h-3 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                            />
                        </svg>
                    </a>
                </div>

                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <i class="fa fa-area-chart fa-2x text-gray-500 dark:text-gray-400"></i>
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Areas
                        </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                        15
                    </p>
                    <a
                        href="#"
                        class="inline-flex items-center text-blue-600 hover:underline"
                    >
                        See more
                        <svg
                            class="w-3 h-3 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                            />
                        </svg>
                    </a>
                </div>
            </div>

            {/* <div class="grid grid-cols-2 gap-4">
                <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p class="text-2xl text-gray-400 dark:text-gray-500">
                        <svg
                            class="w-3.5 h-3.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 1v16M1 9h16"
                            />
                        </svg>
                    </p>
                </div>
                <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p class="text-2xl text-gray-400 dark:text-gray-500">
                        <svg
                            class="w-3.5 h-3.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 1v16M1 9h16"
                            />
                        </svg>
                    </p>
                </div>
            </div> */}
        </div>
    );
}
