import { useState } from "react";
import { CheckCircle2, XCircle, ArrowRight, ArrowLeft, RotateCcw } from "lucide-react";
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
  const [current, setCurrent] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const total = questions.length;
  const q = questions[current];
  const score = questions.reduce((acc, qq) => acc + (answers[qq.id] === qq.correctAnswer ? 1 : 0), 0);
  const pct = Math.round((score / total) * 100);
  const passed = pct >= 70;

  const allAnswered = questions.every((qq) => answers[qq.id] !== undefined);
  const selected = answers[q.id];

  const submit = () => {
    setSubmitted(true);
    if (pct >= 70) onPassed(pct);
  };

  const reset = () => {
    setSubmitted(false);
    setAnswers({});
    setCurrent(0);
  };

  if (submitted) {
    return (
      <div className="space-y-5">
        <div className={`rounded-2xl p-6 text-center ${passed ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
          <p className="text-4xl font-black mb-1">{pct}%</p>
          <p className="font-semibold">{passed ? "Passed! Module complete." : "You need 70% to pass. Review and try again."}</p>
          <p className="text-sm mt-1 opacity-80">{score} of {total} correct</p>
          {!passed && (
            <Button onClick={reset} variant="outline" className="mt-4 border-red-300 text-red-700">
              <RotateCcw className="w-4 h-4 mr-2" /> Retry quiz
            </Button>
          )}
        </div>

        <div className="space-y-3">
          {questions.map((qq, qi) => {
            const userAns = answers[qq.id];
            const ok = userAns === qq.correctAnswer;
            return (
              <div key={qq.id} className={`rounded-xl border p-4 ${ok ? "border-green-200 bg-green-50/40" : "border-red-200 bg-red-50/40"}`}>
                <p className="font-semibold text-blue-900 mb-2 flex items-start gap-2">
                  {ok ? <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /> : <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />}
                  <span>{qi + 1}. {qq.question}</span>
                </p>
                <p className="text-sm text-blue-700 ml-7">Your answer: <span className={ok ? "text-green-700 font-medium" : "text-red-700 font-medium"}>{qq.options[userAns] ?? "—"}</span></p>
                {!ok && <p className="text-sm text-blue-700 ml-7">Correct: <span className="text-green-700 font-medium">{qq.options[qq.correctAnswer]}</span></p>}
                {qq.explanation && <p className="text-sm text-blue-600 mt-2 ml-7 italic">{qq.explanation}</p>}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Progress */}
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-purple-600 uppercase tracking-wide">Question {current + 1} of {total}</span>
        <span className="text-blue-500">{Object.keys(answers).length}/{total} answered</span>
      </div>
      <div className="h-1.5 rounded-full bg-blue-100 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all" style={{ width: `${((current + 1) / total) * 100}%` }} />
      </div>

      {/* Question card */}
      <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-300" key={q.id}>
        <p className="text-lg font-bold text-blue-900 mb-5">{q.question}</p>
        <div className="space-y-2.5">
          {q.options.map((opt, oi) => {
            const isSel = selected === oi;
            return (
              <button
                key={oi}
                onClick={() => setAnswers((a) => ({ ...a, [q.id]: oi }))}
                className={`w-full text-left px-4 py-3 rounded-xl border-2 transition flex items-center gap-3 ${
                  isSel
                    ? "border-blue-500 bg-blue-50 text-blue-900 font-medium"
                    : "border-blue-100 hover:border-blue-300 hover:bg-blue-50/50 text-blue-800"
                }`}
              >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${isSel ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"}`}>
                  {String.fromCharCode(65 + oi)}
                </span>
                <span>{opt}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Nav */}
      <div className="flex items-center justify-between gap-3">
        <Button
          variant="outline"
          onClick={() => setCurrent((c) => Math.max(0, c - 1))}
          disabled={current === 0}
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> Previous
        </Button>
        {current < total - 1 ? (
          <Button
            onClick={() => setCurrent((c) => Math.min(total - 1, c + 1))}
            disabled={selected === undefined}
            className="premium-button"
          >
            Next <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        ) : (
          <Button onClick={submit} disabled={!allAnswered} className="premium-button">
            Submit quiz
          </Button>
        )}
      </div>
    </div>
  );
}
