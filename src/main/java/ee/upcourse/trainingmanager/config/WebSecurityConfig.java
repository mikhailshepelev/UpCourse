package ee.upcourse.trainingmanager.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers( "/registration",
                        "/home",
                        "/css/**",
                        "/js/**",
                        "/images/**",
                        "/fonts/**",
                        "/h2-console/**")
                .permitAll()
                .anyRequest().authenticated()
                .and()
                .csrf().ignoringAntMatchers("/h2-console/**") //don't apply CSRF protection to /h2-console
                .and().headers().frameOptions().sameOrigin() //allow use of frame to same origin urls
                .and()
                .formLogin()
                .and()
                .httpBasic();

    }

}