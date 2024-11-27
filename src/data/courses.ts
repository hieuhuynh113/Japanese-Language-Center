export interface Course {
  id: string;
  title: string;
  description: string;
  type: 'online' | 'offline';
  level: string;
  duration: string;
  schedule: string;
  price: string;
  image: string;
  curriculum: string[];
  requirements: string[];
  benefits: string[];
}

export const courses: Course[] = [
  {
    id: 'n5-offline',
    title: 'Khóa học N5 - Offline',
    description: 'Khóa học JLPT N5 offline dành cho người mới bắt đầu, giúp bạn xây dựng nền tảng vững chắc với tiếng Nhật.',
    type: 'offline',
    level: 'N5 - Sơ cấp',
    duration: '4 tháng',
    schedule: '3 buổi/tuần, 2 tiếng/buổi',
    price: '4.500.000 VNĐ',
    image: 'https://images.unsplash.com/photo-1580237072617-771c3ecc4a24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    curriculum: [
      'Học 50 chữ Hiragana và Katakana',
      'Học 100 chữ Kanji cơ bản',
      'Ngữ pháp cơ bản N5',
      'Từ vựng 800 từ thông dụng',
      'Luyện nghe, nói, đọc, viết cơ bản',
      'Thực hành giao tiếp hàng ngày'
    ],
    requirements: [
      'Không yêu cầu kiến thức tiếng Nhật',
      'Có thể học online hoặc offline',
      'Cam kết học tập đầy đủ'
    ],
    benefits: [
      'Nắm vững kiến thức cơ bản tiếng Nhật',
      'Có thể giao tiếp đơn giản',
      'Đạt chứng chỉ JLPT N5',
      'Tài liệu học tập đầy đủ'
    ]
  },
  {
    id: 'n5-online',
    title: 'Khóa học N5 - Online',
    description: 'Khóa học JLPT N5 online linh hoạt về thời gian, phù hợp cho người đi làm hoặc sinh viên bận rộn.',
    type: 'online',
    level: 'N5 - Sơ cấp',
    duration: '4 tháng',
    schedule: 'Linh hoạt theo lịch học viên',
    price: '3.500.000 VNĐ',
    image: 'https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    curriculum: [
      'Học 50 chữ Hiragana và Katakana',
      'Học 100 chữ Kanji cơ bản',
      'Ngữ pháp cơ bản N5',
      'Từ vựng 800 từ thông dụng',
      'Video bài giảng có thể xem lại',
      'Bài tập tương tác online'
    ],
    requirements: [
      'Không yêu cầu kiến thức tiếng Nhật',
      'Có máy tính và internet ổn định',
      'Tự giác trong học tập'
    ],
    benefits: [
      'Học mọi lúc mọi nơi',
      'Xem lại bài giảng không giới hạn',
      'Tương tác trực tiếp với giáo viên',
      'Tiết kiệm chi phí và thời gian di chuyển'
    ]
  },
  {
    id: 'n4-offline',
    title: 'Khóa học N4 - Offline',
    description: 'Khóa học JLPT N4 offline giúp nâng cao khả năng tiếng Nhật sau khi đã hoàn thành N5.',
    type: 'offline',
    level: 'N4 - Sơ trung cấp',
    duration: '4 tháng',
    schedule: '3 buổi/tuần, 2 tiếng/buổi',
    price: '5.000.000 VNĐ',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    curriculum: [
      'Học 150 chữ Kanji mới',
      'Ngữ pháp trung cấp N4',
      'Từ vựng 1500 từ',
      'Luyện nghe hiểu hội thoại',
      'Đọc hiểu văn bản đơn giản',
      'Thực hành giao tiếp nâng cao'
    ],
    requirements: [
      'Đã hoàn thành N5 hoặc tương đương',
      'Cam kết học tập đầy đủ',
      'Hoàn thành bài tập đầy đủ'
    ],
    benefits: [
      'Nâng cao khả năng giao tiếp',
      'Đọc hiểu văn bản cơ bản',
      'Đạt chứng chỉ JLPT N4',
      'Cơ hội việc làm tốt hơn'
    ]
  },
  {
    id: 'n4-online',
    title: 'Khóa học N4 - Online',
    description: 'Khóa học JLPT N4 online với phương pháp học tập hiện đại, tương tác cao.',
    type: 'online',
    level: 'N4 - Sơ trung cấp',
    duration: '4 tháng',
    schedule: 'Linh hoạt theo lịch học viên',
    price: '4.000.000 VNĐ',
    image: 'https://images.unsplash.com/photo-1554672408-17407e0322ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    curriculum: [
      'Học 150 chữ Kanji mới',
      'Ngữ pháp trung cấp N4',
      'Từ vựng 1500 từ',
      'Video bài giảng chất lượng cao',
      'Bài tập tương tác online',
      'Luyện thi thử trực tuyến'
    ],
    requirements: [
      'Đã hoàn thành N5 hoặc tương đương',
      'Có máy tính và internet ổn định',
      'Tự giác trong học tập'
    ],
    benefits: [
      'Học mọi lúc mọi nơi',
      'Tài liệu học tập đa dạng',
      'Hỗ trợ 1-1 với giáo viên',
      'Cộng đồng học tập trực tuyến'
    ]
  },
  {
    id: 'n3-offline',
    title: 'Khóa học N3 - Offline',
    description: 'Khóa học JLPT N3 offline nâng cao kỹ năng tiếng Nhật toàn diện, hướng đến khả năng giao tiếp thành thạo.',
    type: 'offline',
    level: 'N3 - Trung cấp',
    duration: '6 tháng',
    schedule: '3 buổi/tuần, 2.5 tiếng/buổi',
    price: '6.500.000 VNĐ',
    image: 'https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    curriculum: [
      'Học 350 chữ Kanji mới',
      'Ngữ pháp trung cấp N3',
      'Từ vựng 3000 từ',
      'Luyện nghe hiểu nâng cao',
      'Đọc hiểu báo chí cơ bản',
      'Kỹ năng thuyết trình tiếng Nhật'
    ],
    requirements: [
      'Đã hoàn thành N4 hoặc tương đương',
      'Cam kết học tập đầy đủ',
      'Thực hành thường xuyên'
    ],
    benefits: [
      'Giao tiếp thành thạo trong nhiều tình huống',
      'Đọc hiểu văn bản phức tạp',
      'Đạt chứng chỉ JLPT N3',
      'Cơ hội việc làm trong công ty Nhật'
    ]
  },
  {
    id: 'n3-online',
    title: 'Khóa học N3 - Online',
    description: 'Khóa học JLPT N3 online chất lượng cao với nhiều tính năng học tập tương tác.',
    type: 'online',
    level: 'N3 - Trung cấp',
    duration: '6 tháng',
    schedule: 'Linh hoạt theo lịch học viên',
    price: '5.500.000 VNĐ',
    image: 'https://images.unsplash.com/photo-1609234656388-0ff363383899?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    curriculum: [
      'Học 350 chữ Kanji mới',
      'Ngữ pháp trung cấp N3',
      'Từ vựng 3000 từ',
      'Video bài giảng chuyên sâu',
      'Thực hành online với native speaker',
      'Mô phỏng kỳ thi JLPT N3'
    ],
    requirements: [
      'Đã hoàn thành N4 hoặc tương đương',
      'Có máy tính và internet ổn định',
      'Cam kết học tập nghiêm túc'
    ],
    benefits: [
      'Học tập linh hoạt mọi lúc mọi nơi',
      'Tài liệu học tập phong phú',
      'Tương tác trực tiếp với giáo viên người Nhật',
      'Cộng đồng học tập năng động'
    ]
  }
];
