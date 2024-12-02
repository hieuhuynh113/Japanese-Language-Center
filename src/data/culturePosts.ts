export interface CulturePost {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  category: string;
  content: {
    introduction: string;
    sections: {
      id: string;
      title: string;
      content: string;
      image?: string;
    }[];
    conclusion: string;
  };
  tags: string[];
  readingTime: number;
}

export const culturePosts: CulturePost[] = [
  {
    id: 'japanese-tea-ceremony',
    title: 'Nghệ thuật trà đạo Nhật Bản',
    description: 'Khám phá văn hóa trà đạo độc đáo của Nhật Bản - một nghi thức thể hiện sự tinh tế trong văn hóa Nhật Bản',
    image: 'https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/ban-sao-shutterstock1908062413-1675500379018.jpg',
    date: '2024-01-15',
    author: 'Nguyễn Văn A',
    category: 'Văn hóa Nhật Bản',
    tags: ['Trà đạo', 'Văn hóa', 'Nghi thức', 'Thiền'],
    readingTime: 8,
    content: {
      introduction: 'Trà đạo Nhật Bản (茶道, Sadō) không chỉ đơn thuần là việc thưởng thức trà, mà còn là một nghi thức nghệ thuật tinh tế, thể hiện tinh thần "Hòa - Kính - Thanh - Tịnh" của văn hóa Nhật Bản. Nghệ thuật này đã tồn tại và phát triển qua nhiều thế kỷ, trở thành một phần không thể thiếu trong di sản văn hóa của đất nước Mặt trời mọc.',
      sections: [
        {
          id: 'history',
          title: 'Lịch sử và nguồn gốc',
          content: 'Trà đạo Nhật Bản có nguồn gốc từ Trung Quốc vào thế kỷ thứ 9, khi các nhà sư Phật giáo mang hạt giống trà và phương pháp pha trà về Nhật Bản. Đến thế kỷ 16, dưới sự hoàn thiện của thiền sư Sen no Rikyu, trà đạo đã phát triển thành một nghệ thuật độc đáo với những nguyên tắc và triết lý riêng.',
          
        },
        {
          id: 'principles',
          title: 'Bốn nguyên tắc cơ bản',
          content: 'Trà đạo Nhật Bản dựa trên bốn nguyên tắc cơ bản: Hòa (和, Wa) - sự hài hòa, Kính (敬, Kei) - sự tôn trọng, Thanh (清, Sei) - sự thanh khiết, và Tịnh (寂, Jaku) - sự tĩnh lặng. Những nguyên tắc này không chỉ áp dụng trong việc pha trà mà còn phản ánh cách sống và tư duy của người Nhật.',
          
        },
        {
          id: 'ceremony',
          title: 'Quy trình và nghi thức',
          content: 'Một buổi trà đạo truyền thống thường kéo dài từ 2 đến 4 giờ, bao gồm nhiều bước như dọn dẹp không gian, chuẩn bị đạo cụ, pha trà và thưởng thức. Khách tham dự sẽ được hướng dẫn cách ngồi, cách cầm chén trà và thưởng thức trà theo đúng nghi thức.',
          
        },
        {
          id: 'tools',
          title: 'Dụng cụ và không gian',
          content: 'Dụng cụ trà đạo bao gồm những món đồ tinh xảo như chén trà (茶碗, chawan), phới trà tre (茶筅, chasen), muôi múc nước (柄杓, hishaku) và hộp đựng trà (棗, natsume). Không gian trà đạo được thiết kế tối giản theo phong cách wabi-sabi, tạo cảm giác bình yên và tĩnh lặng.',
          image: 'https://gomnhat.com/wp-content/uploads/2017/03/tra-dao-nhat-ban-4.jpg'
        },
        {
          id: 'modern',
          title: 'Trà đạo trong thời hiện đại',
          content: 'Ngày nay, trà đạo vẫn được duy trì và phát triển tại Nhật Bản, đồng thơi lan tỏa ra khắp thế giới. Nhiều người trẻ Nhật Bản học trà đạo như một cách để hiểu rõ hơn về văn hóa truyền thống và rèn luyện tâm tính. Các trường học trà đạo cũng mở cửa đón nhận người nước ngoài muốn tìm hiểu về nghệ thuật này.'
        }
      ],
      conclusion: 'Trà đạo Nhật Bản là một nghệ thuật tinh tế, thể hiện sự hòa quyện giữa con người với thiên nhiên, giữa vật chất và tinh thần. Thông qua việc học và thực hành trà đạo, chúng ta không chỉ hiểu thêm về văn hóa Nhật Bản mà còn học được cách sống chậm lại, tận hưởng từng khoảnh khắc và tôn trọng những giá trị truyền thống.'
    }
  },
  {
    id: 'matsuri-festivals',
    title: 'Lễ hội Matsuri - Tinh hoa văn hóa Nhật Bản',
    description: 'Tìm hiểu về các lễ hội truyền thống Matsuri, nơi hội tụ văn hóa và tâm linh Nhật Bản',
    image: 'https://ohayo-onsen.com/wp-content/uploads/2023/12/le-hoi-van-hoa-nhat-ban-11.jpg',
    date: '2024-01-10',
    author: 'Trần Thị B',
    category: 'Văn hóa Nhật Bản',
    tags: ['Lễ hội', 'Matsuri', 'Văn hóa', 'Tâm linh'],
    readingTime: 6,
    content: {
      introduction: 'Matsuri (祭り) là những lễ hội truyền thống của Nhật Bản, thường được tổ chức tại các đền thờ Shinto hoặc chùa Phật giáo. Những lễ hội này không chỉ là dịp để người dân tụ họp, vui chơi mà còn là cách để thể hiện lòng biết ơn, tôn kính và cầu mong sự may mắn, thịnh vượng.',
      sections: [
        {
          id: 'history',
          title: 'Lịch sử và nguồn gốc',
          content: 'Lễ hội Matsuri có nguồn gốc từ thời kỳ Heian (794-1185), khi người Nhật bắt đầu tổ chức các lễ hội để cầu mong mùa màng bội thu, sức khỏe và hạnh phúc. Qua thời gian, các lễ hội này đã phát triển và đa dạng hóa, phản ánh sự phong phú của văn hóa Nhật Bản.',
          
        },
        {
          id: 'types',
          title: 'Các loại lễ hội Matsuri',
          content: 'Có nhiều loại lễ hội Matsuri khác nhau, bao gồm lễ hội mùa xuân (春祭り, haru matsuri), lễ hội mùa hè (夏祭り, natsu matsuri), lễ hội mùa thu (秋祭り, aki matsuri) và lễ hội mùa đông (冬祭り, fuyu matsuri). Mỗi loại lễ hội có những đặc trưng và hoạt động riêng.',
          image: 'https://nippontravel.vn/wp-content/uploads/2024/06/le-hoi-mua-xuan-nhat-ban.webp'
        },
        {
          id: 'activities',
          title: 'Hoạt động trong lễ hội',
          content: 'Trong lễ hội Matsuri, người dân thường tham gia các hoạt động như múa truyền thống, chơi game, thưởng thức ẩm thực địa phương và mua sắm đồ lưu niệm. Những hoạt động này giúp tạo ra một bầu không khí vui tươi, phấn khích và gắn kết cộng đồng.',
          image: 'https://tournhatban.net/wp-content/uploads/2021/09/Hiwatari-Matsuri-2.jpg'
        },
        {
          id: 'importance',
          title: 'Ý nghĩa của lễ hội Matsuri',
          content: 'Lễ hội Matsuri không chỉ là một sự kiện giải trí mà còn có ý nghĩa sâu sắc về mặt văn hóa và tâm linh. Những lễ hội này giúp người dân kết nối với nhau, với thiên nhiên và với các thế hệ trước, đồng thời thể hiện lòng biết ơn và tôn kính đối với các vị thần và tổ tiên.'
        }
      ],
      conclusion: 'Lễ hội Matsuri là một phần quan trọng của văn hóa Nhật Bản, thể hiện sự đa dạng và phong phú của đất nước này. Thông qua việc tham gia và tìm hiểu về các lễ hội này, chúng ta có thể hiểu thêm về lịch sử, truyền thống và giá trị của người Nhật.'
    }
  },
  {
    id: 'kimono-culture',
    title: 'Kimono - Trang phục truyền thống Nhật Bản',
    description: 'Khám phá lịch sử và ý nghĩa của Kimono - trang phục truyền thống đặc trưng của Nhật Bản',
    image: 'https://aloha.edu.vn/wp-content/uploads/2023/10/trang-phuc-nhat-ban.jpg',
    date: '2024-01-05',
    author: 'Lê Văn C',
    category: 'Văn hóa Nhật Bản',
    tags: ['Kimono', 'Trang phục', 'Văn hóa', 'Truyền thống'],
    readingTime: 7,
    content: {
      introduction: 'Kimono (着物) là trang phục truyền thống của Nhật Bản, có lịch sử phát triển lâu dài và phong phú. Từ thời kỳ Heian đến nay, kimono đã trở thành biểu tượng của văn hóa Nhật Bản, thể hiện sự tinh tế và trang nhã của người dân.',
      sections: [
        {
          id: 'history',
          title: 'Lịch sử của kimono',
          content: 'Kimono có nguồn gốc từ thời kỳ Heian (794-1185), khi người Nhật bắt đầu mặc trang phục truyền thống này. Qua thời gian, kimono đã phát triển và đa dạng hóa, phản ánh sự thay đổi của xã hội và văn hóa Nhật Bản.',
          
        },
        {
          id: 'types',
          title: 'Các loại kimono',
          content: 'Có nhiều loại kimono khác nhau, bao gồm kimono mùa xuân (春着物, haru kimono), kimono mùa hè (夏着物, natsu kimono), kimono mùa thu (秋着物, aki kimono) và kimono mùa đông (冬着物, fuyu kimono). Mỗi loại kimono có những đặc trưng và họa tiết riêng.',
          image: 'https://www.tournhatban.net.vn/images/camnangdulich/vanhoaamthuc/kimono/kimono-1.jpg'
        },
        {
          id: 'design',
          title: 'Thiết kế và họa tiết',
          content: 'Kimono thường được thiết kế với các họa tiết và màu sắc đặc trưng, phản ánh sự tinh tế và trang nhã của người Nhật. Các họa tiết phổ biến bao gồm hoa, lá, chim và các biểu tượng khác.',
          image: 'https://tour24h.com/wp-content/uploads/2022/06/hoa-tiet-tren-kimono-nhat-ban-2.jpg'
        },
        {
          id: 'importance',
          title: 'Ý nghĩa của kimono',
          content: 'Kimono không chỉ là một trang phục mà còn là biểu tượng của văn hóa và truyền thống Nhật Bản. Việc mặc kimono giúp người dân kết nối với nhau, với lịch sử và với các thế hệ trước.'
        }
      ],
      conclusion: 'Kimono là một phần quan trọng của văn hóa Nhật Bản, thể hiện sự tinh tế và trang nhã của người dân. Thông qua việc tìm hiểu về kimono, chúng ta có thể hiểu thêm về lịch sử, truyền thống và giá trị của người Nhật.'
    }
  },
  {
    id: 'japanese-gardens',
    title: 'Vườn Nhật Bản - Thiên đường thu nhỏ',
    description: 'Tìm hiểu về nghệ thuật tạo vườn của Nhật Bản - nơi hội tụ của thiên nhiên và triết học',
    image: 'https://thacnuocphongthuy.vn/wp-content/uploads/2021/09/cach-lam-vuon-thien-nhat-ban-3.jpg',
    date: '2024-01-01',
    author: 'Phạm Thị D',
    category: 'Văn hóa Nhật Bản',
    tags: ['Vườn Nhật', 'Thiên nhiên', 'Triết học', 'Nghệ thuật'],
    readingTime: 8,
    content: {
      introduction: 'Vườn Nhật Bản là một hình thức nghệ thuật độc đáo, thể hiện mối quan hệ hài hòa giữa con người và thiên nhiên. Những vườn này không chỉ là nơi thư giãn mà còn là biểu tượng của triết học và văn hóa Nhật Bản.',
      sections: [
        {
          id: 'history',
          title: 'Lịch sử của vườn Nhật',
          content: 'Vườn Nhật Bản có nguồn gốc từ thời kỳ Heian (794-1185), khi người Nhật bắt đầu tạo ra những vườn cảnh quan. Qua thời gian, vườn Nhật đã phát triển và đa dạng hóa, phản ánh sự thay đổi của xã hội và văn hóa Nhật Bản.',
          
        },
        {
          id: 'design',
          title: 'Thiết kế và tạo vườn',
          content: 'Vườn Nhật Bản thường được thiết kế với các yếu tố tự nhiên như đá, nước, cây cối và hoa. Việc tạo vườn đòi hỏi sự tinh tế và sáng tạo, nhằm tạo ra một không gian hài hòa và thư giãn.',
          image: 'https://sanvuonadong.vn/wp-content/uploads/2020/07/san-vuon-nhat-ban-10-san-vuon-a-dong.jpg'
        },
        {
          id: 'philosophy',
          title: 'Triết học và ý nghĩa',
          content: 'Vườn Nhật Bản không chỉ là một không gian vật chất mà còn là biểu tượng của triết học và văn hóa Nhật Bản. Việc tạo vườn và thưởng thức vườn giúp người dân kết nối với thiên nhiên và với chính mình.',
          
        },
        {
          id: 'importance',
          title: 'Ý nghĩa của vườn Nhật',
          content: 'Vườn Nhật Bản là một phần quan trọng của văn hóa Nhật Bản, thể hiện sự tinh tế và trang nhã của người dân. Việc tạo vườn và thưởng thức vườn giúp người dân kết nối với nhau, với thiên nhiên và với các thế hệ trước.'
        }
      ],
      conclusion: 'Vườn Nhật Bản là một biểu tượng của triết học và văn hóa Nhật Bản, thể hiện mối quan hệ hài hòa giữa con người và thiên nhiên. Thông qua việc tìm hiểu về vườn Nhật, chúng ta có thể hiểu thêm về lịch sử, truyền thống và giá trị của người Nhật.'
    }
  }
];
