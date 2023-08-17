import React, { useState } from "react";
import NovaTable from "../sub-components/novaTable";
import ButtonsWithIcon from "../sub-components/novaBtnWithIcon";
import FormModal from "../sub-components/novaFormModal";
import { Label, TextInput, Select, Textarea } from "flowbite-react";
import { HiPlus } from "react-icons/hi";

const LoanApplications = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <div class="grid grid-cols-1 px-4 pt-6 xl:grid-cols-1 xl:gap-1 dark:bg-gray-900">
            <FormModal
                openModal={openModal}
                setOpenModal={handleCloseModal}
                modalSize="7xl"
            >
                {
                    <div class="max-w-7xl px-4 py-8 mx-auto lg:py-5">
                        <h2 class="mb-1 text-xl font-bold text-gray-900 dark:text-white text-center">
                            General Details
                        </h2>
                        <form action="#">
                            <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                                <div class="sm:col-span-2">
                                    <label
                                        for="name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Customer Name
                                    </label>
                                    <TextInput
                                        id="customer"
                                        placeholder="John Doe"
                                        required
                                        type="email"
                                    />
                                </div>
                                <div class="w-full">
                                    <label
                                        for="brand"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Loan Type
                                    </label>
                                    <Select id="loan_type" required>
                                        <option>Type 1</option>
                                        <option>Type 2</option>
                                        <option>Type 3</option>
                                        <option>Type 4</option>
                                    </Select>
                                </div>
                                <div class="w-full">
                                    <label
                                        for="price"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Loan Plan
                                    </label>
                                    <Select id="loan_plan" required>
                                        <option>Plan 1</option>
                                        <option>Plan 2</option>
                                        <option>Plan 3</option>
                                        <option>Plan 4</option>
                                    </Select>
                                </div>
                                <div>
                                    <label
                                        for="item-weight"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Area
                                    </label>
                                    <Select id="area" required>
                                        <option>Area 1</option>
                                        <option>Area 2</option>
                                        <option>Area 3</option>
                                        <option>Area 4</option>
                                    </Select>
                                </div>
                                <div>
                                    <label
                                        for="category"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Group
                                    </label>
                                    <Select id="loan_plan" required>
                                        <option>Group 1</option>
                                        <option>Group 2</option>
                                        <option>Group 3</option>
                                        <option>Group 4</option>
                                    </Select>
                                </div>
                                <div class="sm:col-span-2">
                                    <label
                                        for="address"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Address
                                    </label>
                                    <Textarea
                                        id="address"
                                        placeholder="2nd Lane , Peradeniya , Kandy"
                                        required
                                        rows={4}
                                    />
                                </div>
                            </div>
                            <h2 class="mb-1 text-xl font-bold text-gray-900 dark:text-white text-center">
                                Main Gurantor Details
                            </h2>

                            <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                                <div class="sm:col-span-2">
                                    <label
                                        for="name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Gurantor Name
                                    </label>
                                    <TextInput
                                        id="customer"
                                        placeholder="John Smith"
                                        required
                                        type="email"
                                    />
                                </div>
                                <div class="w-full">
                                    <label
                                        for="brand"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        NIC
                                    </label>
                                    <TextInput
                                        id="customer"
                                        placeholder="1998xxxxxx"
                                        required
                                        type="text"
                                    />
                                </div>
                                <div class="w-full">
                                    <label
                                        for="price"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Mobile
                                    </label>
                                    <TextInput
                                        id="customer"
                                        placeholder="0771234567"
                                        required
                                        type="text"
                                    />
                                </div>
                                <div class="sm:col-span-2">
                                    <label
                                        for="address"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Address
                                    </label>
                                    <Textarea
                                        id="address"
                                        placeholder="2nd Lane , Peradeniya , Kandy"
                                        required
                                        rows={4}
                                    />
                                </div>
                            </div>
                            <h2 class="mb-1 text-xl font-bold text-gray-900 dark:text-white text-center">
                                Secondary Gurantor Details
                            </h2>

                            <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                                <div class="sm:col-span-2">
                                    <label
                                        for="name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Gurantor Name
                                    </label>
                                    <TextInput
                                        id="customer"
                                        placeholder="John Smith"
                                        required
                                        type="email"
                                    />
                                </div>
                                <div class="w-full">
                                    <label
                                        for="brand"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        NIC
                                    </label>
                                    <TextInput
                                        id="customer"
                                        placeholder="1998xxxxxx"
                                        required
                                        type="text"
                                    />
                                </div>
                                <div class="w-full">
                                    <label
                                        for="price"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Mobile
                                    </label>
                                    <TextInput
                                        id="customer"
                                        placeholder="0771234567"
                                        required
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                                <div class="sm:col-span-2">
                                    <label
                                        for="name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Gurantor Name
                                    </label>
                                    <TextInput
                                        id="customer"
                                        placeholder="John Smith"
                                        required
                                        type="email"
                                    />
                                </div>
                                <div class="w-full">
                                    <label
                                        for="brand"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        NIC
                                    </label>
                                    <TextInput
                                        id="customer"
                                        placeholder="1998xxxxxx"
                                        required
                                        type="text"
                                    />
                                </div>
                                <div class="w-full">
                                    <label
                                        for="price"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Mobile
                                    </label>
                                    <TextInput
                                        id="customer"
                                        placeholder="0771234567"
                                        required
                                        type="text"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                }
            </FormModal>
            <ButtonsWithIcon
                text="Add New Application"
                classes="w-64 mb-2"
                onClick={handleOpenModal}
                btnIcon={HiPlus}
            />
            <NovaTable
                tblColumns={[
                    "Customer",
                    "Loan",
                    "Next Payment",
                    "Status",
                    "Actions",
                ]}
            />
        </div>
    );
};

export default LoanApplications;
