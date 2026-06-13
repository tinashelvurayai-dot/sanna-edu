import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CourseQuizQuestion } from "@/lib/course-content-types";

export function QuizModule({
  questions,
  onPassed,
}: {
  questions: CourseQuizQuestion[];
  onPassed: (score: number) => void;
}) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.correctAnswer ? 1 : 0), 0);
  const pct = Math.round((score / questions.length) * 100);
  const passed = pct >= 70;

  const submit = () => {
    setSubmitted(true);
    if (pct >= 70) onPassed(pct);
  };

  return (
    <div className="space-y-6">
      {questions.map((q, qi) => (
        <div key={q.id} className="rounded-xl border border-blue-100 p-5 bg-white">
          <p className="font-semibold text-blue-900 mb-3">{qi + 1}. {q.question}</p>
          <div className="space-y-2">
            {q.options.map((opt, oi) => {
              const selected = answers[q.id] === oi;
              const correct = submitted && oi === q.correctAnswer;
              const wrong = submitted && selected && oi !== q.correctAnswer;
              return (
                <button
                  key={oi}
                  disabled={submitted}
                  onClick={() => setAnswers((a) => ({ ...a, [q.id]: oi }))}
                  className={`w-full text-left px-4 py-2.5 rounded-lg border transition flex items-center justify-between ${
                    correct ? "border-green-500 bg-green-50 text-green-800"
                    : wrong ? "border-red-400 bg-red-50 text-red-700"
                    : selected ? "border-blue-500 bg-blue-50 text-blue-800"
                    : "border-blue-100 hover:border-blue-300 text-blue-800"
                  }`}
                >
                  <span>{opt}</span>
                  {correct && <CheckCircle2 className="w-4 h-4" />}
                  {wrong && <XCircle className="w-4 h-4" />}
                </button>
              );
            })}
          </div>
          {submitted && q.explanation && (
            <p className="text-sm text-blue-600 mt-3 bg-blue-50 rounded-lg p-3">{q.explanation}</p>
          )}
        </div>
      ))}

      {!submitted ? (
        <Button onClick={submit} disabled={Object.keys(answers).length < questions.length} className="premium-button w-full py-3">
          Submit quiz
        </Button>
      ) : (
        <div className={`rounded-xl p-5 text-center ${passed ? "bg-green-50 text-green-800" : "bg-red-50 text-red-700"}`}>
          <p className="text-2xl font-black">{pct}%</p>
          <p className="font-medium">{passed ? "Passed! 🎉 Module complete." : "You need 70% to pass. Review and try again."}</p>
          {!passed && (
            <Button onClick={() => { setSubmitted(false); setAnswers({}); }} variant="outline" className="mt-3 border-red-300 text-red-700">
              Retry quiz
            </Button>
          )}
        </div>
      )}
    </div>
  );
}