'use client'

import { createNewProject } from "@/lib/api";
import { useState } from "react";
import Modal from "react-modal";
import Button from "./Button";
import Input from "./Input";

Modal.setAppElement("#modal");

const NewProject = () => {
  const [isModalOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createNewProject(name)
    closeModal()
  }

  return (
    <div className="flex items-center justify-center px-6 py-8 transition-all duration-200 ease-in-out hover:scale-105">
      <Button onClick={() => openModal()}>+ New Project</Button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName="bg-[rgba(0,0,0,.4)] flex justify-center items-center absolute top-0 left-0 h-screen w-screen"
        className="w-3/4 p-8 bg-white rounded-xl"
      >
        <h1 className="mb-6 text-3xl">New Project</h1>
        <form className="flex items-center" onSubmit={handleSubmit}>
          <Input
            placeholder="project name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button type="submit">Create</Button>
        </form>
      </Modal>
    </div>
  )
}

export default NewProject