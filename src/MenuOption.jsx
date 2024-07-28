export default function MenuOption({MenuOption, menuTarget}) {
    return (
      <>
        <a href={menuTarget} className="block m-3 p-3 hover:bg-gray-800 hover:text-white rounded-lg text-white font-semibold">
          {MenuOption}
        </a>
      </>
    );
  }