// Dữ liệu mẫu về học bổng
export const scholarships = [
  {
    id: 'mext',
    title: 'Học bổng Chính phủ Nhật Bản (MEXT) 2024',
    provider: 'Bộ Giáo dục, Văn hóa, Thể thao, Khoa học và Công nghệ Nhật Bản',
    description: 'Học bổng MEXT (Monbukagakusho) là một trong những học bổng du học Nhật Bản danh giá nhất, cung cấp cơ hội học tập toàn phần cho sinh viên quốc tế. Chương trình này không chỉ hỗ trợ về mặt tài chính mà còn tạo điều kiện để sinh viên trải nghiệm văn hóa và giáo dục Nhật Bản.',
    value: 'Toàn phần (học phí, sinh hoạt phí, vé máy bay)',
    duration: '5 năm (1 năm dự bị + 4 năm đại học)',
    benefits: [
      'Miễn học phí toàn phần tại các trường đại học quốc lập Nhật Bản',
      'Trợ cấp sinh hoạt phí hàng tháng (khoảng 117,000 yên)',
      'Vé máy bay khứ hồi (khi bắt đầu và kết thúc khóa học)',
      'Khóa học tiếng Nhật 1 năm tại các trường dự bị',
      'Bảo hiểm y tế toàn diện',
      'Hỗ trợ chỗ ở trong ký túc xá sinh viên',
      'Cơ hội tham gia các hoạt động văn hóa và giao lưu quốc tế'
    ],
    requirements: [
      'Dưới 24 tuổi tính đến ngày 1 tháng 4 năm 2024',
      'Tốt nghiệp THPT hoặc sắp tốt nghiệp trước tháng 3/2024',
      'GPA từ 7.5 trở lên trong 3 năm THPT',
      'Khả năng tiếng Nhật tối thiểu N3 hoặc tiếng Anh IELTS 5.5',
      'Sức khỏe tốt, được chứng nhận bởi bác sĩ',
      'Cam kết học tập và tuân thủ luật pháp Nhật Bản',
      'Sẵn sàng thích nghi với văn hóa và lối sống Nhật Bản'
    ],
    applicationProcess: [
      'Nộp hồ sơ sơ tuyển tại Đại sứ quán Nhật Bản',
      'Thi tuyển vòng 1: Kiểm tra hồ sơ và bài thi viết',
      'Thi tuyển vòng 2: Phỏng vấn trực tiếp',
      'Xét duyệt cuối cùng bởi MEXT tại Nhật Bản',
      'Nhận kết quả và chuẩn bị thủ tục du học'
    ],
    deadline: '15/05/2024',
    documents: [
      'Đơn xin học bổng (theo mẫu của MEXT)',
      'Bảng điểm THPT (bản gốc và bản dịch công chứng)',
      'Bằng tốt nghiệp THPT hoặc giấy chứng nhận sẽ tốt nghiệp',
      'Chứng chỉ năng lực tiếng Nhật/tiếng Anh',
      'Giấy khám sức khỏe (theo mẫu của MEXT)',
      'Thư giới thiệu từ hiệu trưởng/giáo viên chủ nhiệm',
      'Ảnh thẻ 4x6 (chụp trong vòng 6 tháng)'
    ],
    successStories: [
      {
        name: 'Nguyễn Văn A',
        avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400',
        university: 'Đại học Tokyo',
        major: 'Công nghệ thông tin',
        year: '2022',
        quote: 'Học bổng MEXT đã mở ra cơ hội tuyệt vời để tôi theo đuổi ước mơ học tập tại Nhật Bản. Tôi đã học được không chỉ kiến thức chuyên môn mà còn cả văn hóa và ngôn ngữ Nhật Bản.',
        achievements: [
          'Đạt điểm trung bình 3.8/4.0',
          'Đạt chứng chỉ tiếng Nhật N1 sau 2 năm',
          'Thực tập tại công ty Sony'
        ]
      },
      {
        name: 'Trần Thị B',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
        university: 'Đại học Osaka',
        major: 'Kinh tế quốc tế',
        year: '2023',
        quote: 'Với sự hỗ trợ từ học bổng MEXT, tôi đã có thể tập trung hoàn toàn vào việc học tập mà không phải lo lắng về tài chính. Đây thực sự là một cơ hội thay đổi cuộc đời.',
        achievements: [
          'Giành giải nhất cuộc thi thuyết trình tiếng Nhật',
          'Được nhận vào chương trình trao đổi với ĐH Harvard',
          'Xuất bản nghiên cứu trên tạp chí kinh tế quốc tế'
        ]
      }
    ],
    faqs: [
      {
        question: 'Có cần biết tiếng Nhật để apply học bổng MEXT không?',
        answer: 'Không bắt buộc phải biết tiếng Nhật khi nộp hồ sơ, tuy nhiên việc có chứng chỉ tiếng Nhật sẽ là lợi thế. Bạn có thể apply với chứng chỉ tiếng Anh.'
      },
      {
        question: 'Có thể chọn trường đại học mong muốn không?',
        answer: 'Bạn có thể đề xuất tối đa 3 trường đại học mong muốn, tuy nhiên quyết định cuối cùng sẽ do MEXT và các trường xem xét dựa trên năng lực và chỗ trống.'
      },
      {
        question: 'Có được phép làm thêm khi nhận học bổng MEXT không?',
        answer: 'Có, bạn được phép làm thêm tối đa 28 giờ/tuần sau khi được cấp giấy phép từ Cục quản lý xuất nhập cảnh.'
      }
    ]
  },
  {
    id: 'jasso',
    title: 'Học bổng JASSO 2024',
    provider: 'Tổ chức Hỗ trợ Sinh viên Nhật Bản (JASSO)',
    description: 'Học bổng JASSO (Japan Student Services Organization) là học bổng hàng tháng dành cho sinh viên quốc tế có thành tích học tập xuất sắc, giúp trang trải một phần chi phí sinh hoạt trong thời gian học tập tại Nhật Bản.',
    value: '80,000 yên/tháng',
    duration: '12 tháng (có thể gia hạn tùy theo thành tích học tập)',
    benefits: [
      'Trợ cấp 80,000 yên mỗi tháng',
      'Không cần hoàn trả',
      'Được phép nhận song song với các học bổng khác (trừ học bổng chính phủ)',
      'Hỗ trợ tham gia các hoạt động giao lưu văn hóa',
      'Cơ hội networking với sinh viên quốc tế khác'
    ],
    requirements: [
      'Đã được trường Nhật Bản tiếp nhận hoặc đang theo học',
      'Có thành tích học tập tốt (GPA từ 2.3/3.0 trở lên)',
      'Gặp khó khăn về tài chính trong việc học tập tại Nhật',
      'Không nhận học bổng chính phủ hoặc học bổng trên 80,000 yên/tháng từ tổ chức khác',
      'Có tư cách lưu trú "Student" tại Nhật Bản'
    ],
    applicationProcess: [
      'Nộp đơn thông qua trường đại học tại Nhật Bản',
      'Cung cấp các giấy tờ chứng minh thành tích học tập',
      'Phỏng vấn (nếu được yêu cầu)',
      'Chờ kết quả xét duyệt từ JASSO'
    ],
    deadline: '15/10/2024',
    documents: [
      'Đơn xin học bổng JASSO',
      'Bảng điểm gần nhất',
      'Giấy chứng nhận thu nhập gia đình',
      'Thư giới thiệu từ giáo viên',
      'Bản kế hoạch học tập và nghiên cứu',
      'Bản sao hộ chiếu và thẻ lưu trú'
    ],
    successStories: [
      {
        name: 'Lê Văn C',
        avatar: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=400',
        university: 'Đại học Kyoto',
        major: 'Khoa học môi trường',
        year: '2023',
        quote: 'Học bổng JASSO đã giúp tôi tập trung vào việc học tập và nghiên cứu mà không phải lo lắng quá nhiều về chi phí sinh hoạt tại Nhật.',
        achievements: [
          'Duy trì GPA 3.8/4.0',
          'Công bố 2 bài báo khoa học',
          'Đạt giải nhì cuộc thi Innovation Challenge'
        ]
      }
    ],
    faqs: [
      {
        question: 'Học bổng JASSO có thể gia hạn không?',
        answer: 'Có thể gia hạn nếu duy trì được thành tích học tập tốt và đáp ứng các điều kiện của JASSO.'
      },
      {
        question: 'Có được làm thêm khi nhận học bổng JASSO không?',
        answer: 'Có, bạn vẫn được phép làm thêm trong giới hạn cho phép (28 giờ/tuần).'
      },
      {
        question: 'Khi nào sẽ nhận được tiền học bổng?',
        answer: 'Tiền học bổng thường được chuyển vào tài khoản vào đầu mỗi tháng.'
      }
    ]
  },
  {
    id: 'asean',
    title: 'Học bổng ASEAN 2024',
    provider: 'Quỹ Giao lưu Quốc tế Nhật Bản',
    description: 'Chương trình học bổng dành riêng cho sinh viên đến từ các nước ASEAN, nhằm thúc đẩy sự hiểu biết và hợp tác giữa Nhật Bản và các nước Đông Nam Á.',
    value: 'Bán phần (học phí và một phần sinh hoạt phí)',
    duration: '4 năm',
    benefits: [
      'Miễn giảm học phí',
      'Trợ cấp sinh hoạt phí một phần',
      'Hỗ trợ tìm nhà ở',
      'Cơ hội thực tập tại doanh nghiệp Nhật Bản'
    ],
    requirements: [
      'Quốc tịch thuộc khối ASEAN',
      'GPA từ 7.0 trở lên',
      'Tiếng Nhật N4 hoặc IELTS 6.0',
      'Dưới 25 tuổi'
    ],
    deadline: '31/07/2024',
    successStories: [
      {
        name: 'Phạm Thị D',
        avatar: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=400',
        university: 'Đại học Waseda',
        major: 'Quản trị kinh doanh',
        year: '2023',
        quote: 'Học bổng ASEAN không chỉ hỗ trợ tài chính mà còn tạo điều kiện để tôi kết nối với cộng đồng sinh viên ASEAN tại Nhật Bản. Đây là một trải nghiệm vô cùng quý giá.'
      }
    ]
  }
];
