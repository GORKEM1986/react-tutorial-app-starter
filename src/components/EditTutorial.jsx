import axios from "axios";
import { useState, useEffect } from "react";

const EditTutorial = ({ item, getTutorials }) => {
  const { id, title: oldTitle, description: oldDescription } = item;

  const [title, setTitle] = useState(oldTitle);
  const [description, setDescription] = useState(oldDescription);

  console.log(title);
  console.log(description);

  useEffect(() => {
    setTitle(oldTitle);
    setDescription(oldDescription);
  }, [oldTitle, oldDescription]);

  const handleEdit = (e) => {
    e.preventDefault();
    editTutorial(id, title, description);
    setTitle("");
    setDescription("");
  };

  // const editTutorial = async ({ id, title, description }) => {
  //   const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials"
  //   try {
  //     await axios.put(`${BASE_URL}/${id}/`, { title, description })
  //   } catch (error) {
  //     console.log(error)
  //   }
  //    getTutorials()
  // }

  const editTutorial = async (id, title, description) => {
    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials";
    try {
      await axios.put(`${BASE_URL}/${id}/`, { title, description });
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  return (
    <div className="modal" tabIndex="-1" id="edit-tutor">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter your title"
                value={title || ""}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="desc"
                placeholder="Enter your Description"
                value={description || ""}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="modal-footer">
            {/* <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button> */}
            <button
              onClick={handleEdit}
              type="button"
              data-bs-dismiss="modal"
              className="btn btn-primary"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;
