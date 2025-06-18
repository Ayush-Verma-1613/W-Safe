import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Gavel, BookText } from "lucide-react";

function Laws() {
  const lawsList = [
    {
      title: "Article 14 – Right to Equality",
      description: "Ensures equality before the law and equal protection of the laws for all individuals, including women.",
      icon: <ShieldCheck className="text-purple-600" size={24} />
    },
    {
      title: "Article 15 – Prohibition of Discrimination",
      description: "Prohibits discrimination on grounds of religion, race, caste, sex, or place of birth. Special provisions can be made for women and children.",
      icon: <ShieldCheck className="text-purple-600" size={24} />
    },
    {
      title: "Article 21 – Right to Life and Personal Liberty",
      description: "Guarantees every individual the right to live with dignity, which includes protection from violence and abuse.",
      icon: <ShieldCheck className="text-purple-600" size={24} />
    },
    {
      title: "Section 354 – Assault on Women",
      description: "Punishes assault or criminal force used against a woman with intent to outrage her modesty.",
      icon: <Gavel className="text-pink-600" size={24} />
    },
    {
      title: "Section 375 & 376 – Rape Laws",
      description: "Defines rape and prescribes punishment for the crime, including life imprisonment or death in extreme cases.",
      icon: <Gavel className="text-pink-600" size={24} />
    },
    {
      title: "Section 498A – Cruelty by Husband or Relatives",
      description: "Protects married women from cruelty, harassment, and domestic violence by husband or his relatives.",
      icon: <Gavel className="text-pink-600" size={24} />
    },
    {
      title: "The Protection of Women from Domestic Violence Act, 2005",
      description: "Covers physical, emotional, sexual, and economic abuse against women within households.",
      icon: <BookText className="text-purple-500" size={24} />
    },
    {
      title: "The Sexual Harassment of Women at Workplace Act, 2013",
      description: "Ensures a safe and secure working environment for women and mandates internal complaints committees in workplaces.",
      icon: <BookText className="text-purple-500" size={24} />
    },
    {
      title: "Right to Free Legal Aid",
      description: "Under the Legal Services Authorities Act, every woman is entitled to free legal services in courts.",
      icon: <ShieldCheck className="text-purple-600" size={24} />
    }
  ];

  return (
    <>
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-pink-100 to-purple-100 py-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold text-purple-700 mb-2">⚖️ Women's Safety & Legal Rights</h1>
          <p className="text-gray-700 text-lg">
            Know your rights. Stay safe. Be empowered.
          </p>
        </motion.div>
      </div>

      {/* Content Area */}
      <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-6 -mt-6 z-10 relative">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-700 text-md"
        >
          Indian law provides several constitutional rights and legislative protections to ensure the safety, dignity, and equality of women. Here are the most important ones every woman should know:
        </motion.p>

        {/* Laws List */}
        <ul className="space-y-5">
          {lawsList.map((law, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-l-4 border-purple-500 pl-4 py-2 flex items-start gap-3"
            >
              <div>{law.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-purple-700">{law.title}</h3>
                <p className="text-gray-700">{law.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>

        <p className="text-sm text-gray-600 mt-6 italic">
          🔒 *Awareness is power. Knowing your rights is the first step toward protecting yourself and others.*
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-purple-700 text-white text-center py-5 mt-10">
        <p className="font-semibold text-lg">&copy; {new Date().getFullYear()} W-Safe</p>
        <p className="text-sm">Empowering women through awareness, law, and love ❤️</p>
      </footer>
    </>
  );
}

export default Laws;
