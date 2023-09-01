import React, { useState } from "react";
import NovaTable from "../sub-components/novaTable";
import ButtonsWithIcon from "../sub-components/novaBtnWithIcon";
import FormModal from "../sub-components/novaFormModal";
import { Label, TextInput, Select, Textarea, Table } from "flowbite-react";
import { HiPlus } from "react-icons/hi";
import DeleteModal from "../sub-components/novaConfirmDeleteModal";

const Groups = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    //new application modal
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
                    <div class="max-w-7xl px-4 py-8 mx-auto lg:py-5">
                        <h2 class="mb-1 text-xl font-bold text-gray-900 dark:text-white text-center">
                            Group Details
                        </h2>
                        <form action="#">
                            <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                                <div class="sm:col-span-2">
                                    <label
                                        for="item-weight"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Village
                                    </label>
                                    <Select id="area" required>
                                        <option>Village 1</option>
                                        <option>Village 2</option>
                                        <option>Village 3</option>
                                        <option>Village 4</option>
                                    </Select>
                                </div>
                                <div class="sm:col-span-2">
                                    <label
                                        for="name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Group Name
                                    </label>
                                    <TextInput
                                        id="customer"
                                        placeholder="group"
                                        required
                                        type="email"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                }
            </FormModal>

            <ButtonsWithIcon
                text="Add New Group"
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
                tblColumns={["Group Id", "Group", "Village", "Actions"]}
            >
                {
                    <Table.Body className="divide-y">
                        <Table.Row
                            className="bg-white dark:border-gray-700 dark:bg-gray-800"
                            key={1}
                        >
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                ABC
                            </Table.Cell>
                            <Table.Cell>Colombo</Table.Cell>
                            <Table.Cell>
                                <a
                                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                    onClick={handleOpenModal}
                                    href="#"
                                >
                                    <p>Edit</p>
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
                            <Table.Cell>2</Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                CBD
                            </Table.Cell>
                            <Table.Cell>Kurunegala</Table.Cell>
                            <Table.Cell>
                                <a
                                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                    href="/tables"
                                >
                                    <p>Edit</p>
                                </a>

                                <a
                                    className="font-medium text-red-600 hover:underline dark:text-red-500"
                                    href="/tables"
                                >
                                    <p>Delete</p>
                                </a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row
                            className="bg-white dark:border-gray-700 dark:bg-gray-800"
                            key={1}
                        >
                            <Table.Cell>N3</Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                XCV
                            </Table.Cell>
                            <Table.Cell>Kaluthara</Table.Cell>
                            <Table.Cell>
                                <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                    <p>Edit</p>
                                </a>

                                <a
                                    className="font-medium text-red-600 hover:underline dark:text-red-500"
                                    href="/tables"
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

export default Groups;
