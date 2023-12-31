package com.jpa.yeongaesomun.domain.entity.message;


import com.jpa.yeongaesomun.domain.entity.member.User;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "TBL_Message_Receiver")
@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MessageReceiver {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @EqualsAndHashCode.Include
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private User receiver;

    @OneToOne(fetch = FetchType.LAZY)
    private Message message;


    @Builder
    public MessageReceiver(User receiver, Message message){
        this.receiver=receiver;
        this.message=message;
    }
}

