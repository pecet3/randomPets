import Context, { TContext } from "./DogsContext";
import { useContext } from "react";
import { nanoid } from "nanoid";
import { HiOutlineHeart } from "react-icons/hi";
import { Icon } from "../../common/Icon";
export const SavedImages = () => {
  const { state, addToArray } = useContext(Context) as TContext;
  return (
    <section className="m-8">
      <button
        onClick={() => addToArray()}
        className="m-auto my-8 flex justify-center gap-2 rounded-md bg-red-400 p-2 text-pink-800"
      >
        <HiOutlineHeart size="24" />
        add to favourite
      </button>
      <div className="grid grid-cols-2 justify-center gap-2 text-center md:grid-cols-3 lg:grid-cols-4">
        {state.savedImgs.map((element) => (
          <button>
            <img
              src={element}
              key={nanoid()}
              className="m-auto h-48 w-64 rounded-lg object-fill md:h-64 lg:w-96"
            />
          </button>
        ))}
      </div>
    </section>
  );
};
