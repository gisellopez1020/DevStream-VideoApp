import SearchBar from "./components/SearchBar";
import VideoGrid from "./components/VideoGrid";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import HeroSection from "./components/HeroSection";
import ErrorBanner from "./components/ErrorBanner";
import AddVideoModal from "./components/AddVideoModal";
import { useVideos } from "./hooks/useVideos";
import { useVideoForm } from "./hooks/useVideoForm";
import "./App.css";

export default function App() {
  const {
    videos,
    filteredVideos,
    loading,
    error,
    searchTerm,
    activeCategory,
    handleLike,
    setSearchTerm,
    setActiveCategory,
    addVideoToList,
  } = useVideos();

  const {
    showModal,
    formData,
    creatingVideo,
    openModal,
    closeModal,
    handleFormChange,
    handleCreateVideo: handleSubmitForm,
  } = useVideoForm(addVideoToList);

  const handleCreateVideo = (e) => {
    handleSubmitForm(e);
  };

  return (
    <div className="app">
      <AppHeader videosCount={videos.length} onAddVideoClick={openModal} />

      <main className="app-main">
        <HeroSection />

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <ErrorBanner error={error} onRetry={() => window.location.reload()} />

        <AddVideoModal
          showModal={showModal}
          formData={formData}
          creatingVideo={creatingVideo}
          onClose={closeModal}
          onFormChange={handleFormChange}
          onSubmit={handleCreateVideo}
        />

        <VideoGrid
          videos={filteredVideos}
          loading={loading}
          onLike={handleLike}
          searchTerm={searchTerm}
          activeCategory={activeCategory}
        />
      </main>

      <AppFooter />
    </div>
  );
}
