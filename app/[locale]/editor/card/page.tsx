import ActivePage from "./components/ActivePage";
import EditorFooter from "./components/EditorFooter";
import EditorHeader from "./components/EditorHeader";
import PageSelector from "./components/PageSelector";
import SideBar from "./components/sideBar/SideBar";

const CardEditor = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <EditorHeader />
      <div className="flex h-full w-full">
        <SideBar />
        <div className="flex flex-col gap-8 items-center flex-1 w-full mt-4 relative pb-14">
          <PageSelector />
          <ActivePage />
        </div>
      </div>
      <EditorFooter />
    </div>
  );
};

export default CardEditor;
