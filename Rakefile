require 'fileutils'

# define paths and configures
ROOT = "./"
CONFIG = {
  'orgfilen' => File.join(ROOT, 'src/orgmode'),
  'orgmode_ext' => "org"
}

# definitioner
def ask(message, valid_options)
  if valid_options
    answer = get_stdin("#{message} #{valid_options.to_s.gsub(/"/, '').gsub(/,/, '/')}") while !valid_options.include?(answer)
  else
    answer = get_stdin(message)
  end
  answer
end

def get_stdin(message)
  print message
  STDIN.gets.chomp
end

namespace :utkast do
  namespace :skapa do
    namespace :orgmode do
      desc "Skapa filnamn.org här"
      task :orgfilen, :title do |t, args|
        if args.title
          title = args.title
        else
          title = get_stdin("Ange ett namn: ")
        end
        slug = title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
        begin
          date = (ENV['date'] ? Time.parse(ENV['date']) : Time.now).strftime('%Y-%m-%d')
        end
        filnamn = File.join(CONFIG['orgfilen'], "#{date}-#{slug}.#{CONFIG['orgmode_ext']}")
        if File.exist?(filnamn)
          abort("rake aborted!") if ask("Filen #{filnamn} finns redan. Vill du skriva över?", ['y', 'n']) == 'n'
        end

        puts "Das ist dein neu post: #{filnamn}"
        open(filnamn, 'w') do |post|
          post.puts "\#\+TITLE:#{title.gsub(/-/, ' ')}"
          post.puts "\#\+OPTIONS: toc:nil"
          post.puts "\#\+STARTUP: showall indent"
          post.puts "\#\+STARTUP: hidestars"
        end
      end
    end
  end
end
