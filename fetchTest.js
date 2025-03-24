(async function testFetch() {
    const url = "https://donggu-sp.com/api/pickup/"; // 테스트용 API 엔드포인트

    try {
        // 최신 Node.js(18+)에서는 기본 fetch 사용
        const fetchFn = globalThis.fetch || (await import('node-fetch')).default;

        const response = await fetchFn(url);
        if (!response.ok) {
            throw new Error(`Fetch 요청 실패! 상태 코드: ${response.status}`);
        }

        const data = await response.json();
        console.log("✅ Fetch 요청 성공!");
        console.log("📌 응답 데이터:", data);
    } catch (error) {
        console.error("❌ 요청 중 오류 발생:", error);
    }
})();
