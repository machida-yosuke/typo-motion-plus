import { Carousel } from "@/features/carousel/components/Carousel";
import "./App.css";
import { CardGrid } from "@/features/card-grid/components/CardGrid";


export const App = () => {
  const carouselCards = [
    { title: "新着情報1", description: "最新のお知らせやキャンペーン情報をお届けします。" },
    { title: "特集記事2", description: "注目のトピックスや特集コンテンツをご紹介。" },
    { title: "ピックアップ3", description: "おすすめの商品やサービスをピックアップ。" },
    { title: "イベント情報4", description: "開催予定のイベントや実施中の企画について。" },
  ];

  const gridCards = [
    { title: "service-1", description: "基本的なサービス内容についての説明です。" },
    // { title: "service-2", description: "さまざまな機能や特徴を詳しく解説します。" },
    // { title: "service-3", description: "独自の技術やノウハウについての紹介です。" },
    // { title: "service-4", description: "お客様のニーズに応じた柔軟な対応について。" },
    // { title: "service-5", description: "安心のサポート体制とアフターケアの詳細。" },
    // { title: "service-6", description: "料金プランや支払い方法についての案内。" },
    // { title: "service-7", description: "よくある質問とその回答をまとめています。" },
    // { title: "service-8", description: "導入事例や成功事例のご紹介です。" },
  ];

  return (
    <div className="w-full space-y-12">
      <section className="w-full" aria-labelledby="carousel-heading">
        <h2 id="carousel-heading" className="text-2xl font-bold text-center mb-6">
          新着情報
        </h2>
        <Carousel cards={carouselCards} />
      </section>

      <section className="w-full" aria-labelledby="grid-heading">
        <h2 id="grid-heading" className="text-2xl font-bold text-center mb-6">
          サービス一覧
        </h2>
        <CardGrid cards={gridCards} />
      </section>
    </div>
  );
};
