import { useState } from "react";

const FaQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: "¿Puedo cambiar el día, horario, o película de las entradas que compré?",
      answer: "No podemos hacer cambios desde CineGo, el mail de confirmación de su compra se encuentran las condiciones y procedimientos para hacer cambios, que requerirán que usted se dirija a la boletería del cine antes del inicio de la función para la cual haya comprado entradas. Lo que podemos hacer es solicitar una devolución de su compra, y luego usted puede volver a comprar las entradas de su preferencia. Para eso, le solicitaremos ver el mail de confirmación de la compra, teniendo en cuenta que para gestionar una devolución debe hacerlo al menos tres (3) horas antes del inicio de la función para la cual haya comprado entradas.",
    },
    {
      id: 2,
      question: "¿Me olvidé de comprar comidas? ¿Puedo agregarlas a mi compra?",
      answer: "Si, se puede hacer compra de combos de candy, por separado sin problemas o usted puede comprar comidas en el cine, los stands de comidas se encuentran abiertos",
    },
    {
      id: 3,
      question: "Quiero una devolvución parcial de mi compra (devolver una de las varias entradas, devolver las comidas pero no las entrdas, u otros casos similares).¿Es posible?",
      answer: "No podemos hacer devoluciones parciales desde CineGo. Usted puede dirigirse a la boletería del cine y realizar el pedido de devolución parcial, antes que inicie la función para la cual haya comprado entradas. También puede pedir la devolución total y hacer una nueva compra. Para eso, le solicitaremos ver el mail de confirmación de la compra, teniendo en cuenta que para gestionar una devolución debe hacerlo al menos tres (3) horas antes del inicio de la función para la cual haya comprado entradas",
    },
    {
      id: 4,
      question: "No me llegó el mail de confirmacion de la compra.¿Qué pudo haber ocurrido?",
      answer: "Cuando usted se registró en la página, nos proporcionó una dirección de e-mail. A esa dirección enviamos todas nuestras comunicaciones, incluyendo las de confirmación de compras. Si usted no encuentra el mail de confirmación, por favor tenga en cuenta los siguientes puntos: -Asegúrese de estar revisando la casilla de mail correspondiente. -Revise si el mail de confirmación no se encuentra en las carpetas de SPAM o correo no deseado, si ese es el caso, por favor marque el remitente info@voyalcine.net como remitente confiable para que no se repita el inconveniente. -Algunas casillas de e-mail laborales o profesionales rechazan los mensajes provenientes de remitentes no autorizados. Le recomendamos que no se registre en la página con este tipo de direcciones de e-mail. -Si a pesar de haber seguido estas indicaciones no encuentra la información, envíenos su consulta."
    },
    {
      id: 5,
      question: "¿Puedo cancelar mi pedido de devolución?",
      answer: "Lamentablemente, no podemos cancelar un pedido de devolución ya inciado. Usted puede hacer una nueva compra, pero no podemos garantizar que las localidades que usted ha solicitado devolver se encuentren nuevamente disponibles.",
    },
  
  ];

  const toggleQuestion = (id) => {
    if (activeQuestion === id) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(id);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-2 py-20 mt-10">
    <h2 className="text-3xl font-bold mb-16">Preguntas Frecuentes</h2>
    <div className="space-y-6">
      {questions.map((q) => (
        <div key={q.id} className="border border-gray-400 p-5 rounded-lg">
          <button
            className="flex items-center justify-between w-full hover:text-blue-800"
            onClick={() => toggleQuestion(q.id)}
          >
            <span className="text-x1 font-semibold hover:text-blue-800">{q.question}</span>
            <svg
              className={`h-6 w-6 ${
                activeQuestion === q.id ? "transform rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 6-6-6"
              />
            </svg>
          </button>
          {activeQuestion === q.id && (
            <div className="mt-4">
              <p>{q.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default FaQ;
