"use client"

export default function GameShowMoreButton() {
  const handleClick = () => {
    const hiddenGames = document.getElementById('hidden-games');
    if (hiddenGames) {
      hiddenGames.classList.remove('hidden');
      hiddenGames.classList.add('visible');
    }
    // Hide the button after clicking - be more specific
    const showMoreButtons = document.querySelectorAll('button');
    showMoreButtons.forEach(button => {
      if (button.textContent?.includes('Show More')) {
        (button as HTMLElement).style.display = 'none';
      }
    });
  };

  return (
    <div className="flex justify-center mt-10 sm:mt-16 lg:mt-20">
      <button
        className="w-37.5 h-13.5 rounded-full border-[2.32px] border-[#626262] text-[#626262] font-medium text-base flex items-center justify-center transition-all duration-300 ease-in-out active:scale-95"
        onClick={handleClick}
      >
        Show More
      </button>
    </div>
  )
}
