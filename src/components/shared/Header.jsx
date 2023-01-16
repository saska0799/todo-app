import { useContext, useMemo, useEffect, useState, useCallback } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import ModalContext from "../../context/modal/ModalContext";
import HeaderImg from "../../assets/header.jpg";
import { generateRandomNumber } from "../../utils/randomNumber";
import { formatDate } from "../../utils/formatDate";

const Header = () => {
  const [quotes, setQuotes] = useState([]);
  const { modalDispatch } = useContext(ModalContext);

  const quotesLength = quotes.length;
  const randomNumber = useMemo(
    () => generateRandomNumber(quotesLength),
    [quotesLength]
  );
  const formattedDate = formatDate();

  const fetchQuotes = useCallback(async () => {
    const res = await fetch("quotes.json");
    const data = await res.json();
    setQuotes(data.quotes);
  }, []);

  useEffect(() => {
    fetchQuotes();
  }, [fetchQuotes]);

  return (
    <header>
      <img
        src={HeaderImg}
        alt="header anime wallpaper"
        className="h-[80vh] w-full object-cover position-center absolute"
      />
      <div className="h-[80vh] relative flex flex-col justify-between md:p-24 sm:p-16 p-8">
        <AiOutlinePlusCircle
          className="md:w-[5rem] w-[3rem] h-auto"
          color="white"
          onClick={() => modalDispatch({ type: "OPEN_MODAL", payload: true })}
        />
        <div className="flex justify-between items-center text-slate-200 lg:text-4xl md:text-3xl sm:text-2xl text-xl">
          <div>{formattedDate}</div>
          <h3 className="w-[70%]  text-end">
            {quotes && quotes[randomNumber]}
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
