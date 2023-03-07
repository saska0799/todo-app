import { useContext, useMemo, useEffect, useState, useCallback } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import ModalContext from "../../context/modal/ModalContext";
import { fetch } from "../../utils/fetch";
import { generateRandomNumber } from "../../utils/randomNumber";

const Header = () => {
  const [quotes, setQuotes] = useState([]);
  const { modalDispatch } = useContext(ModalContext);

  const quotesLength = quotes.length;
  const randomNumber = useMemo(
    () => generateRandomNumber(quotesLength),
    [quotesLength]
  );

  const fetchQuotes = useCallback(async () => {
    const data = await fetch("quotes.json");

    setQuotes(data.quotes);
  }, []);

  useEffect(() => {
    fetchQuotes();
  }, [fetchQuotes]);

  return (
    <header className="h-[22vh] flex justify-between items-center bg-[#CE1F6A] sm:px-20 px-8">
      <AiOutlinePlusCircle
        className="sm:w-16 w-10 h-auto cursor-pointer fill-[#FFE3FE] hover:fill-[#ffffff] transition-all"
        onClick={() => modalDispatch({ type: "OPEN_MODAL", payload: true })}
      />

      <h3 className=" w-[70%] text-end text-slate-200 lg:text-4xl md:text-3xl sm:text-2xl text-lg">
        {quotes && quotes[randomNumber]}
      </h3>
    </header>
  );
};

export default Header;
