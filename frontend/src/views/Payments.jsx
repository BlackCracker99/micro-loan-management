import React, { useState } from "react";
import NovaTable from "../sub-components/novaTable";
import ButtonsWithIcon from "../sub-components/novaBtnWithIcon";
import FormModal from "../sub-components/novaFormModal";
import { Label, TextInput, Select, Textarea, Table } from "flowbite-react";
import { HiPlus } from "react-icons/hi";
import DeleteModal from "../sub-components/novaConfirmDeleteModal";

const Payments = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    //new payment modal
    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    //delete modal
    const handleOpenDeleteModal = () => {
        setOpenDeleteModal(true);
    };

    const handleCloseDeleteModal = () => {
        setOpenDeleteModal(false);
    };

    return (
        <div class="grid grid-cols-1 px-4 pt-6 xl:grid-cols-1 xl:gap-1 dark:bg-gray-900">
            <FormModal
                openModal={openModal}
                setOpenModal={handleCloseModal}
                modalSize="7xl"
            >
                {
                    <div class="max-w-5xl px-4 py-8 mx-auto lg:py-5">
                        <h2 class="mb-1 text-xl font-bold text-gray-900 dark:text-white text-center">
                            Make Payment
                        </h2>
                        <form action="#">
                            <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                                <div class="w-full">
                                    <label
                                        for="brand"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Village
                                    </label>
                                    <Select id="loan_type" required>
                                        <option>Village 1</option>
                                        <option>Village 2</option>
                                        <option>Village 3</option>
                                        <option>Village 4</option>
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
                                        Loan Reference
                                    </label>
                                    <Select id="loan_plan" required>
                                        <option>ref 1</option>
                                        <option>ref 2</option>
                                        <option>ref 3</option>
                                        <option>ref 4</option>
                                    </Select>
                                </div>
                                <div>
                                    <label
                                        for="category"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Payment Type
                                    </label>
                                    <Select id="loan_plan" required>
                                        <option>Cash</option>
                                        <option>Card</option>
                                    </Select>
                                </div>
                                <div class="sm:col-span-2">
                                    <label
                                        for="name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Amount
                                    </label>
                                    <TextInput
                                        id="customer"
                                        placeholder="5000.00"
                                        required
                                        type="number"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                }
            </FormModal>

            <ButtonsWithIcon
                text="Add New Payment"
                classes="w-64 mb-2"
                onClick={handleOpenModal}
                btnIcon={HiPlus}
            />

            <DeleteModal
                openModal={openDeleteModal}
                setOpenModal={handleCloseDeleteModal}
                modalSize="2xl"
            ></DeleteModal>

            <NovaTable
                classes="lg:w-4/5"
                tblColumns={[
                    "Reference",
                    "Payee",
                    "Amount",
                    "Penalty",
                    "Actions",
                ]}
            >
                {
                    <Table.Body className="divide-y">
                        <Table.Row
                            className="bg-white dark:border-gray-700 dark:bg-gray-800"
                            key={1}
                        >
                            <Table.Cell>
                                1
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Test User
                            </Table.Cell>
                            <Table.Cell>
                                5000,00
                            </Table.Cell>
                            <Table.Cell>
                                450
                            </Table.Cell>
                            <Table.Cell>
                                <a
                                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                    onClick={handleOpenModal}
                                    href="#"
                                >
                                    <p>Print</p>
                                </a>

                                <a
                                    className="font-medium text-red-600 hover:underline dark:text-red-500"
                                    href="#"
                                    onClick={handleOpenDeleteModal}
                                >
                                    <p>Delete</p>
                                </a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row
                            className="bg-white dark:border-gray-700 dark:bg-gray-800"
                            key={1}
                        >
                            <Table.Cell>
                                2
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Test User 1
                            </Table.Cell>
                            <Table.Cell>
                                4000,00
                            </Table.Cell>
                            <Table.Cell>
                                350
                            </Table.Cell>
                            <Table.Cell>
                                <a
                                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                    onClick={handleOpenModal}
                                    href="#"
                                >
                                    <p>Print</p>
                                </a>

                                <a
                                    className="font-medium text-red-600 hover:underline dark:text-red-500"
                                    href="#"
                                    onClick={handleOpenDeleteModal}
                                >
                                    <p>Delete</p>
                                </a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row
                            className="bg-white dark:border-gray-700 dark:bg-gray-800"
                            key={1}
                        >
                            <Table.Cell>
                                3
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Test User 3
                            </Table.Cell>
                            <Table.Cell>
                                5000,00
                            </Table.Cell>
                            <Table.Cell>
                                450
                            </Table.Cell>
                            <Table.Cell>
                                <a
                                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                    onClick={handleOpenModal}
                                    href="#"
                                >
                                    <p>Print</p>
                                </a>

                                <a
                                    className="font-medium text-red-600 hover:underline dark:text-red-500"
                                    href="#"
                                    onClick={handleOpenDeleteModal}
                                >
                                    <p>Delete</p>
                                </a>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                }
            </NovaTable>
        </div>
    );
};

export default Payments;
