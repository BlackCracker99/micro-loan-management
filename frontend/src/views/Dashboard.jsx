import React from "react";

const Dashboard = () => {
    return (
        <div class="grid grid-cols-1 px-4 pt-6 xl:grid-cols-5 xl:gap-1 dark:bg-gray-900">
            <a
                href="#"
                class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Today Payments
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                    0
                </p>
            </a>

            <a
                href="#"
                class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Customers
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                    0
                </p>
            </a>

            <a
                href="#"
                class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Active Loans
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                    0
                </p>
            </a>

            <a
                href="#"
                class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Total Receivable
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                    0
                </p>
            </a>
        </div>
    );
};

export default Dashboard;
