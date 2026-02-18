'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveFormAndResult } from '@/lib/storage';
import type { FormData, GenerateResult } from '@/types';

export default function Home() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    product: '',
    problem: '',
    targetUser: '',
    budget: '$0',
    timePerDay: '30min',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  /**
   * Update a single form field and clear its validation error.
   */
  function handleChange(field: keyof FormData, value: string): void {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  /**
   * Validate all fields and return true if the form is valid.
   */
  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.product.trim()) {
      newErrors.product = '请输入你的产品描述';
    }
    if (!formData.problem.trim()) {
      newErrors.problem = '请输入产品解决的问题';
    }
    if (!formData.targetUser.trim()) {
      newErrors.targetUser = '请输入目标用户';
    }
    if (!formData.budget) {
      newErrors.budget = '请选择预算范围';
    }
    if (!formData.timePerDay) {
      newErrors.timePerDay = '请选择每天投入时间';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  /**
   * Submit the form to the API, save the result, and redirect.
   */
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    setApiError(null);

    if (!validate()) return;

    setIsLoading(true);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error || `请求失败 (${response.status})`);
      }

      const result: GenerateResult = await response.json();
      saveFormAndResult(formData, result);
      router.push('/results');
    } catch (err) {
      const message = err instanceof Error ? err.message : '未知错误，请稍后重试';
      setApiError(message);
    } finally {
      setIsLoading(false);
    }
  }

  const budgetOptions = [
    { value: '$0', label: '$0 (零成本)' },
    { value: '<$100', label: '< $100' },
    { value: '<$500', label: '< $500' },
    { value: '$500+', label: '$500+' },
  ];

  const timeOptions = [
    { value: '30min', label: '30 分钟' },
    { value: '1h', label: '1 小时' },
    { value: '2h', label: '2 小时' },
    { value: '4h+', label: '4 小时以上' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-12 pb-10 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            找到你的前10个付费客户
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            回答5个简单问题，AI帮你制定获客策略
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-16">
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-2xl space-y-8 rounded-2xl bg-white px-6 py-10 shadow-lg ring-1 ring-gray-200 sm:px-10"
        >
          {/* Question 1 */}
          <div>
            <label
              htmlFor="product"
              className="block text-sm font-semibold text-gray-900"
            >
              1. 你的产品是什么？（一句话描述）
            </label>
            <input
              id="product"
              type="text"
              placeholder="例如：帮助独立开发者自动生成落地页的 SaaS 工具"
              value={formData.product}
              onChange={(e) => handleChange('product', e.target.value)}
              className={`mt-2 block w-full rounded-lg border px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm transition focus:outline-none focus:ring-2 ${
                errors.product
                  ? 'border-red-400 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.product && (
              <p className="mt-1.5 text-sm text-red-600">{errors.product}</p>
            )}
          </div>

          {/* Question 2 */}
          <div>
            <label
              htmlFor="problem"
              className="block text-sm font-semibold text-gray-900"
            >
              2. 解决什么问题？
            </label>
            <input
              id="problem"
              type="text"
              placeholder="例如：独立开发者不擅长设计，做落地页耗时耗力"
              value={formData.problem}
              onChange={(e) => handleChange('problem', e.target.value)}
              className={`mt-2 block w-full rounded-lg border px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm transition focus:outline-none focus:ring-2 ${
                errors.problem
                  ? 'border-red-400 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.problem && (
              <p className="mt-1.5 text-sm text-red-600">{errors.problem}</p>
            )}
          </div>

          {/* Question 3 */}
          <div>
            <label
              htmlFor="targetUser"
              className="block text-sm font-semibold text-gray-900"
            >
              3. 目标用户是谁？
            </label>
            <input
              id="targetUser"
              type="text"
              placeholder="例如：有产品但缺少营销能力的独立开发者"
              value={formData.targetUser}
              onChange={(e) => handleChange('targetUser', e.target.value)}
              className={`mt-2 block w-full rounded-lg border px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm transition focus:outline-none focus:ring-2 ${
                errors.targetUser
                  ? 'border-red-400 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.targetUser && (
              <p className="mt-1.5 text-sm text-red-600">{errors.targetUser}</p>
            )}
          </div>

          {/* Question 4 */}
          <div>
            <label
              htmlFor="budget"
              className="block text-sm font-semibold text-gray-900"
            >
              4. 预算范围？
            </label>
            <select
              id="budget"
              value={formData.budget}
              onChange={(e) => handleChange('budget', e.target.value)}
              className={`mt-2 block w-full rounded-lg border px-4 py-3 text-gray-900 shadow-sm transition focus:outline-none focus:ring-2 ${
                errors.budget
                  ? 'border-red-400 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            >
              {budgetOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.budget && (
              <p className="mt-1.5 text-sm text-red-600">{errors.budget}</p>
            )}
          </div>

          {/* Question 5 */}
          <div>
            <label
              htmlFor="timePerDay"
              className="block text-sm font-semibold text-gray-900"
            >
              5. 每天能投入多少时间？
            </label>
            <select
              id="timePerDay"
              value={formData.timePerDay}
              onChange={(e) => handleChange('timePerDay', e.target.value)}
              className={`mt-2 block w-full rounded-lg border px-4 py-3 text-gray-900 shadow-sm transition focus:outline-none focus:ring-2 ${
                errors.timePerDay
                  ? 'border-red-400 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            >
              {timeOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.timePerDay && (
              <p className="mt-1.5 text-sm text-red-600">{errors.timePerDay}</p>
            )}
          </div>

          {/* API Error */}
          {apiError && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {apiError}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? (
              <>
                <svg
                  className="h-5 w-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                AI 正在生成策略...
              </>
            ) : (
              '生成获客策略'
            )}
          </button>

          <p className="text-xs text-center text-gray-400 mt-4 leading-relaxed">
            你的数据仅存储在浏览器本地 (localStorage)，不会上传到我们的服务器。
            <br />
            表单内容会发送至 AI 服务生成策略，不会被存储或用于其他用途。
          </p>
        </form>
      </section>
    </div>
  );
}
