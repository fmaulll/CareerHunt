import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Filter from "../components/molecules/Filter";
import TablePagination from "../components/organisms/TablePagination";
import { setError, setLoading, userLogout } from "../features/authSlice";
import { RootState } from "../store";
import { PositionData, PositionRequest } from "../type";

const Jobs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userToken } = useSelector((state: RootState) => state.auth);
  const [data, setData] = useState<PositionData[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dataRequest, setDataRequest] = useState<PositionRequest>({
    description: "",
    location: "",
    fullTime: "",
  });

  const getPositions = async () => {
    dispatch(setLoading(true));
    const url = import.meta.env.VITE_BASE_URL;
    try {
      const result = await axios({
        url: `${url}/api/position?page=${currentPage}&description=${dataRequest.description}&location=${dataRequest.location}&full_time=${dataRequest.fullTime}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
      });
      if (result.status === 200) {
        setData(result.data.results);
        setTotalPages(result.data.totalPages);
        dispatch(setLoading(false));
      }
    } catch (error: any) {
      if (error.response.status === 401) {
        alert(error.message);
        dispatch(userLogout());
        navigate("/");

        return;
      }
      dispatch(setLoading(false));
      dispatch(setError(error.response.data.message));
      alert(error.response.data.message);
    }
  };

  const handleChangePage = (type: string) => {
    if (type === "prev") {
      setCurrentPage((prev) => prev - 1);
    }
    if (type === "next") {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handleApplyFilter = (data: PositionRequest) => {
    setDataRequest((prev) => {
      return {
        ...prev,
        ...data,
      };
    });
  };

  const handleResetFilter = () => {
    setDataRequest({
      description: "",
      location: "",
      fullTime: "",
    });
  };

  useEffect(() => {
    getPositions();
  }, [currentPage, dataRequest]);
  return (
    <div className="flex items-start flex-col justify-start h-full">
      <div className="h-1/6 w-full">
        <Filter
          handleFilter={handleApplyFilter}
          handleReset={handleResetFilter}
        />
      </div>
      {/* {data.map((item)=>(
          <div className=" py-10">{item.title}</div>
        ))} */}
      <TablePagination
        handleChangePage={handleChangePage}
        totalPages={totalPages}
        currentPage={currentPage}
        data={data}
      />
    </div>
  );
};

export default Jobs;
