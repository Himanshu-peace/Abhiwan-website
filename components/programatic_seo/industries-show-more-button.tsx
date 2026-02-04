"use client"

export default function IndustriesShowMoreButton() {
  const handleClick = () => {
    const hiddenCards = document.getElementById('hidden-industries');
    if (hiddenCards) {
      hiddenCards.classList.remove('hidden');
      hiddenCards.classList.add('visible');
    }
    
    // Hide the button after clicking - more specific selector
    const button = document.querySelector('[data-show-more-button]') as HTMLElement;
    if (button) {
      button.style.display = 'none';
    }
  };

  return (
    <div className="flex justify-center mt-12">
      <button
        data-show-more-button // Added data attribute for specific targeting
        className="w-[150px] h-[54px] rounded-full border-[2.32px] border-[#FFFFFF] text-[#FFFFFF] font-medium text-base flex items-center justify-center transition-all duration-300 ease-in-out active:scale-95 hover:bg-white/10"
        onClick={handleClick}
      >
        Show More
      </button>
    </div>
  )
}