"use client";
import FAQItem from "./FAQItem";

const FAQ = () => {
  const faqs = [
    { question: "როგორ ხდება მიტანა?", answer: "მიტანის სერვისი მოქმედებს მთელი საქართველოს მასშტაბით. თბილისში მიწოდება ხდება 1-2 სამუშაო დღეშ, ხოლო რეგიონებში 3-5 სამუშაო დღეში" },
    { question: "შემიძლია თუ არა პროდუქტის დაბრუნება?", answer: "“დიახ, შეგიძლიათ პროდუქტის დაბრუნება. დაბრუნება შესაძლებელია მიღებიდან 3 დღეში, პროდუქტი უნდა იყოს ავიაკომპლექტური, არაზიანებული და ორიგინალ შეფუთვაში. დეტალებისთვის გთხოვთ მოგვწეროთ ან დაუკავშირდეთ ჩვენს მხარდაჭერის ხაზს." },
    { question: "როგორ გადავიხადო?", answer: "გადახდა შესაძლებელია ონლაინ: საკრედიტო/დებეტური ბარათით, PayPal-ით ან სხვა ელექტრონული სისტემბით. შეგიძლიათ შეკვეთა გავაგზავნოთ და შემდეგი ეტაპისთვის გაიგზავნება უსაფრთხო გადახდის ბმული." },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-4xl w-full bg-white p-8 m-4 md:p-8 rounded-xl ">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
          ხშირად დასმული კითხვები
        </h2>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;