export default function initService1Card() {
  // カードの要素を取得
  const cardElement = document.querySelector('[data-card-type="service-1"]');
  
  if (!cardElement) return;

  // HTMLElement型にキャスト
  const element = cardElement as HTMLElement;

  // クリックイベントリスナーを追加
  element.addEventListener('click', () => {
    // クリック時のアニメーション
    console.log('クリックされました');
    element.classList.add('animate-pulse');
    setTimeout(() => {
      element.classList.remove('animate-pulse');
    }, 1000);
  });

  // インタラクション用のカスタムデータ属性を追加
  element.setAttribute('data-interactive', 'true');
  
  // アクセシビリティ用の属性を追加
  element.setAttribute('role', 'button');
  element.setAttribute('tabindex', '0');
  
  // キーボードイベントの追加
  element.addEventListener('keypress', (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      element.click();
    }
  });
} 