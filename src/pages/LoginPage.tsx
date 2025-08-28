import { Link } from 'react-router-dom';
import BasicButton from '@/shared/components/atoms/BasicButton';
import FormField from '@/shared/components/molecules/FormField';
import Logo from '@/shared/components/atoms/Logo';

export default function LoginPage() {
  return (
    <div className="flex min-h-full flex-col justify-center bg-[#FFFBEB] py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Logo />
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow-none sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <FormField
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="아이디"
            />

            <FormField
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="비밀번호"
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary-yellow focus:ring-primary-yellow"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  아이디 저장
                </label>
              </div>
            </div>

            <div>
              <BasicButton type="submit" fullWidth variant="primary-yellow">
                로그인
              </BasicButton>
            </div>
          </form>

          <div className="mt-6">
            <div className="flex justify-center space-x-4 text-sm text-gray-500">
              <Link to="/register" className="hover:underline">
                회원가입
              </Link>
              <span className="border-l border-gray-300" />
              <a href="#" className="hover:underline">
                아이디/비밀번호 찾기
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}