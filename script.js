const hotels = [
    {
        id: 1,
        name: "스테이 아키",
        location: "Jeju, South Korea",
        description: "제주의 돌과 바람을 닮은 공간. 고요한 중정에서 즐기는 차 한 잔의 여유는 일상의 소음을 잊게 합니다.",
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["#건축미", "#프라이빗", "#티타임"]
    },
    {
        id: 2,
        name: "호텔 세이지",
        location: "Kyoto, Japan",
        description: "오래된 목조 건물을 현대적으로 재해석한 부티크 호텔. 창밖으로 보이는 정원은 사계절 내내 다른 그림을 보여줍니다.",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["#전통과현대", "#정원", "#힐링"]
    },
    {
        id: 3,
        name: "더 클리프 하우스",
        location: "Bali, Indonesia",
        description: "절벽 위에서 바다를 내려다보는 압도적인 뷰. 자연 속에 완전히 고립된 듯한 해방감을 선사합니다.",
        image: "https://images.unsplash.com/photo-1571896349842-6e53ce41e8f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["#오션뷰", "#인피니티풀", "#럭셔리"]
    },
    {
        id: 4,
        name: "포레스트 하이드어웨이",
        location: "Gangwon, South Korea",
        description: "울창한 숲 속에 숨겨진 비밀스러운 산장. 타닥타닥 타오르는 벽난로 앞에서 진정한 쉼을 경험하세요.",
        image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["#숲캉스", "#불멍", "#아늑함"]
    },
    {
        id: 5,
        name: "어반 생츄어리",
        location: "Seoul, South Korea",
        description: "도심 한복판에서 만나는 의외의 고요함. 미니멀한 인테리어와 최고급 침구가 깊은 숙면을 약속합니다.",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["#도심속휴식", "#미니멀리즘", "#호캉스"]
    },
    {
        id: 6,
        name: "빌라 델 솔",
        location: "Tuscany, Italy",
        description: "이탈리아 토스카나의 태양을 머금은 농가 주택. 직접 재배한 올리브 오일과 와인을 맛보는 미식 여행.",
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["#미식여행", "#빈티지", "#자연"]
    }
];

function renderHotels() {
    const hotelList = document.getElementById('hotel-list');
    
    // Clear existing content (optional, but good for re-rendering)
    hotelList.innerHTML = '';

    hotels.forEach(hotel => {
        const card = document.createElement('div');
        card.className = 'hotel-card';
        
        // Create HTML structure for the card
        card.innerHTML = `
            <div class="hotel-image">
                <img src="${hotel.image}" alt="${hotel.name}">
            </div>
            <div class="hotel-info">
                <span class="hotel-location">${hotel.location}</span>
                <h3 class="hotel-name">${hotel.name}</h3>
                <p class="hotel-desc">${hotel.description}</p>
                <div class="hotel-tags">
                    ${hotel.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;

        // Add click event (mock navigation)
        card.addEventListener('click', () => {
            alert(`${hotel.name} 상세 페이지로 이동합니다. (준비 중)`);
        });

        hotelList.appendChild(card);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderHotels();
});
