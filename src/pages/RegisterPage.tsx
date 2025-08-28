import { Link } from 'react-router-dom';
import BasicButton from '@/shared/components/atoms/BasicButton';
import FormField from '@/shared/components/molecules/FormField';
import Logo from '@/shared/components/atoms/Logo';

export default function RegisterPage() {
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
              autoComplete="new-password"
              required
              placeholder="비밀번호"
            />

            <FormField
              id="confirm-password"
              name="confirm-password"
              type="password"
              autoComplete="new-password"
              required
              placeholder="비밀번호 확인"
            />

            <div>
              <BasicButton type="submit" fullWidth variant="primary-yellow">
                회원가입
              </BasicButton>
            </div>
          </form>

          <div className="mt-6">
            <div className="flex justify-center space-x-4 text-sm text-gray-500">
              <p>
                Already a member?{' '}
                <Link to="/login" className="hover:underline">
                  로그인
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}