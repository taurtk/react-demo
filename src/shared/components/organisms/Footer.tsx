export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">LANDAS</h3>
            <p className="mt-4 text-sm text-gray-400">
              대구 대표: 정창훈 <br />
              1661-6244 <br />
              평일 09:00 - 18:00 <br />
              점심 12:00 - 13:00 <br />
              주말 및 공휴일 휴무
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">고객센터</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  공지사항
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  자주 묻는 질문
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  1:1 문의
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">소셜</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                {/* Replace with actual icons */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} LANDAS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}